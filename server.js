/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require('path')

/** CREATING MONGO AND MONGOOSE CONNECTION */
const mongoose = require('mongoose')
require('dotenv').config()
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.ATLAS_URI
   
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
mongoose.set('useFindAndModify', false); // for some deprecation issues

/** IMPORTING MONGOOSE MODELS */
//user model TODO: change from generic example
const{ User } = require("./models/user")
const {Admin} = require("./models/admin")

/**MIDDLEWARE */
// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const { request } = require("http");
const { ObjectID } = require('mongodb')
const { Proposal } = require("./models/proposal");
const { Story } = require("./models/story");
const { error } = require("console");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/client/build")));

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}


/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: "our secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 3000 * 1000,
            httpOnly: true
        }
    })
);

// Check if a session is still valid
// Return false and clear the sessionStorage if the session expires, maybe need to redirect to the login page when needed 
const checkSessionVaid = (req) => {
    if (!req.session.user){
        // expired
        console.log(req.session)
        return true
    }
    return false
}


/**API CALLS */
//making a user (test API call)
app.post('/api/users', mongoChecker, async (req, res) => {
    log(req.body)

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// A route to login and create a session 
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findByUsername(username, password).then(user => {
        req.session.user = user._id 
        req.session.username = user.username
        res.send({currentUser: req.session.user})
    })
    .catch(error => {
        res.status(400).send()
    })
})

// A route to get the user ID in database 
app.get("/getUserID", (req, res) => {
    const username = req.query.username
    User.findOne({username})
        .then(user => {res.send(user._id)})
        .catch(error => {
            res.status(404).send('Invalid username')
        })

})

// A route to get the username in database 
app.get("/getUsername", (req, res) => {
    const userID = req.query.userID
    User.findById(userID)
        .then(user => {res.send(user.username)})
        .catch(error => {
            res.status(404).send('Invalid userID')
        })

})

// A route to login and create a sessino for admin
app.post("/admin/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.findByUsername(username, password).then(user => {
        req.session.user = user._id 
        req.session.username = user.username
        res.send({currentUser: req.session.user})
    })
    .catch(error => {
        res.status(400).send()
    })
})


// A route to logout a user / admin
app.get("/logout", (req, res) => {
    // log the previous session 
    if(req.session.user == undefined){
        res.status(400).send('Login Session Expired')
    }
    // Remove the session 
    else{
        req.session.destroy(error => {
            if (error){
                res.status(500).send(error)
            }
            else{
                // the session already expire 
                res.status(200).send('Session Logout')
            }
        })
    }
    
})

/*
The request will be like 
{
    proposeToID: A Story's ObjectID in database,
    proposeToTile: Title of the proposing story,
    proposalByUsername: Proposal user's username,
    proposeChapter: Proposal to which chapter,
    visibility: publice(true) / private(false),
    content: proposal content,
    status: proposal status (accpeted/declined/pending/private)

}
*/

// A route to post a story proposal
app.post("/proposal/:id", (req, res) => {
    // Check if the session expired 
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired, failed to create a new proposal')
        return 
    }

    // the session is not expired 
    const proposal = new Proposal({
        proposeToID: req.body.proposeToID,
        proposeToTitle: req.body.proposeToTitle,
        proposeByID: req.params.id,
        proposeByUsername: req.body.proposeByUsername,
        proposeChapter: req.body.proposeChapter,
        visibility: req.body.visibility,
        content: req.body.content,
        status: req.body.status
    })

    Proposal.findByStoryIDAuthorIDAndContent(req.body.proposeToID, req.params.id, req.body.content).then(() => {
        proposal.save().then((result) => {
            res.status(200).send(result)
        }).catch((error) => {
            log(error) // log server error to the console, not to the client.
            if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
                res.status(500).send('Internal server error')
            } else {
                res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
            }
        })
    })
    .catch(error => {
        res.status(400).send('Duplicate Proposal Found')
    }) 
    
})

// A route to post a story
app.post("/story/:id", (req, res) =>{
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired, failed to create a new story')
        return 
    }

    // the session is not expired 
    const story = new Story({
        storyTitle: req.body.storyTitle,
        // storyAuthorUsername: req.body.storyAuthorUsername,
        storyAuthorID: req.params.id,
        storyDate: req.body.storyDate,
        storyTags: req.body.storyTags,
        storyViewCount: req.body.storyViewCount,
        storyChapters: req.body.storyChapters,
        storyPreview: req.body.storyPreview
    })

    Story.findByStoryNameAndAuthor(req.body.storyTitle, req.params.id).then(() => {
        story.save().then((result) => {
            res.status(200).send(result)
        }).catch((error) => {
            log(error) // log server error to the console, not to the client.
            if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
                res.status(500).send('Internal server error')
            } else {
                res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
            }
        })
    })
    .catch(error => {
        res.status(400).send('Duplicate Story')
    })
    
})

// Route for getting a story
app.get('/story/:id', async (req, res) => {
	const id = req.params.id

	// Good practise: Validate id immediately.
	if (!ObjectID.isValid(id)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	// If id valid, findById
	try {
		const story = await Story.findById(id)
		if (!story) {
			res.status(404).send('Resource not found')  // could not find this story
		} else {
			/// sometimes we might wrap returned object in another object:
			//res.send({student})   
			res.send(story)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

// Route for getting all the proposals to a story
app.get('/proposals/:storyId', async (req, res) => {
    const id = req.params.storyId

    // Good practise: Validate id immediately.
	if (!ObjectID.isValid(id)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	// If id valid, findById the story first
	try {
		const story = await Story.findById(id)
		if (!story) {
			res.status(404).send('Resource not found')  // could not find this story
		} else {
			/// sometimes we might wrap returned object in another object:
            //res.send({student})   
            const proposals = await Proposal.find({ proposeToID: id })
            if (!proposals) {
                res.status(404).send('Proposals to Story not found')  // could not find any proposals to this story
            } else {
			    res.send(proposals)
            }
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
})

/**ROUTES */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
