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
const {Picture} = require('./models/picture')
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
const { response } = require("express");
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
//Creating an account
app.post('/api/users', mongoChecker, async (req, res) => {
    log(req.body)

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
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

// A route to get the entire user for userProfile
app.get("/profile", async (req, res) => {
    const id = req.query.userId

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
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  // could not find this user
		} else {
            res.send(user)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error')  // server error
	}
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
// A route to delete a story 
app.delete('/story', (req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }

    Story.deleteOne({_id:req.body.storyID})
        .then(response => 
            {
                Proposal.deleteMany({proposeToID:req.body.storyID})
                    .then(success => res.send(success))
                    .catch(error => res.status(500).send(error))
            })
        .catch(error => res.status(500).send(error))
})

// A route to delete a user 
app.delete('/user', (req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }

    User.deleteOne({_id:req.body.userID})
        .then(response => 
            {
                Proposal.deleteMany({proposeByID:req.body.userID})
                    .then(success => res.send(success))
                    .catch(error => res.status(500).send(error))
                Story.deleteMany({storyAuthorID:req.body.userID})
                    .then(success => res.send(success))
                    .catch(error => res.status(500).send(error))
            })
        .catch(error => res.status(500).send(error))
})


// A route update the story view by 1 
app.post('/story/updateView', (req, res)=>{
    Story.findOneAndUpdate({_id: req.body.storyID}, {$inc:{'storyViewCount':1}})
        .then(data => res.status(200).send())
        .catch(error => res.status(400).send(error))
})

// A route to upvote or downvote a story 
app.post('/vote', (req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
    Story.findById(req.query.storyID)
        .then(response => {
            if(req.query.vote == 1){
                // upvote
                Story.updateOne({_id: req.query.storyID}, {$set: {[`storyVotes.0`]:response.storyVotes[0]+1}})
                .then(data => res.status(200).send(data))
                .catch(error => res.status(500).send(error))
            }
            else{
                Story.updateOne({_id: req.query.storyID}, {$set: {[`storyVotes.1`]:response.storyVotes[1]+1}})
                .then(data => res.status(200).send(data))
                .catch(error => res.status(500).send(error))
            }
            
        })
        .catch(error => {
            res.status(400).send(error)
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
        storyPreview: req.body.storyPreview,
        storyLine: req.body.storyLine
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
// A route to get all stories created by a user

app.get("/story", (req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
    console.log(req.query.user)
    Story.findByStoryAuthor(req.query.user)
            .then(stories => {
                res.status(200).send(stories)
            })
            .catch(error=>{
                res.status(500).send(error)
            })
})

// A route to update a or create a new chapter to a story 
/* Request will be like
 {
     storyChapterContent : 'xxxxx'
 } */
app.post("/story/:id/chapter/:chapterIndex", (req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
    console.log(req)
    // the session is not expired
    Story.findById(req.params.id)
        .then(story => {
            // create a new chapter
            if(parseInt(req.params.chapterIndex) == story.storyChapters.length + 1){
                // console.log('The chapter is ', parseInt(req.params.chapterIndex))
                // console.log('The length is ', story.storyChapters.length)
                // console.log(story.storyChapters)
                Story.findByIdAndUpdate(req.params.id, {$push: {storyChapters : req.body.storyChapterContent}})
                    .then(data => res.status(200).send(data))
                    .catch(error => res.status(500).send(error))
            }
            else{
                // update a previous chapter
                Story.update({_id:req.params.id}, {$set: {[`storyChapters.${req.params.chapterIndex - 1}`]: req.body.storyChapterContent}})
                .then(data => res.status(200).send(data))
                .catch(error => res.status(500).send(error))
            }
            
        })
        .catch(error => {res.status(500).send(error)})
})

// Route for searching stories with keyword 
app.get('/search/story', async(req, res) => {
    const keyword= req.query.keyword
    // Find all stories contain keyword
    Story.find({storyTitle:{$regex: '.*' + keyword +'.*'}})
        .then(data => {res.status(200).send(data)})
        .catch(error => res.status(500).send(error))
})

// A route to update Career Stats
app.post('/updateCareer/', async(req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
    // Update contribution date if it's an 'increase'
    if (req.body.increment > 0) {
        User.findOneAndUpdate({_id:req.body.userID}, {$set:{LastContributionDate: Date.now()}},{new: true, useFindAndModify: false})
    } 
    User.findOneAndUpdate({_id:req.body.userID}, {$inc:{'worksBegunNum': req.body.increment}})
    .then(response => res.send(200))
    .catch(error => res.send(500))
})


// A route to update the proposal status
app.post('/proposalUpdateStatus', async(req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }

    Proposal.update({_id:req.body.proposalID}, {"$set": {"status" : req.body.proposalStatus}})
    .then(response => res.send(200))
    .catch(error => res.send(500))
})

// A route to delete proposal
app.delete('/proposalDelete', async(req, res) => {
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }

    Proposal.deleteOne({_id:req.body.propsalID})
    .then(response => res.send(200))
    .catch(error => res.send(500))
})

//Route for getting all stories
app.get('/search/allstory', async(req, res) => {
    Story.find({storyTitle:{$regex: '.*'}})
        .then(data => {res.status(200).send(data)})
        .catch(error => res.status(500).send(error))
})

// Route for getting all proposals made by a user
app.get('/proposals/all/:userid', async(req,res) =>{
    // Check if the session expired
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
    
    Proposal.find({proposeByID:req.params.userid})
    .then(response => {console.log('We get',response); res.send(response)})
    .catch(error => res.status(500).send(error))
})

// Route for updating proposal content made by a user
app.post('/proposal/update/:propsalID/chapter/:proposeChapter', async(req, res) => {
    console.log('chapter content we get', req.body.storyChapterContent)
    Proposal.update({_id: req.params.proposalID}, {"$set": {"content":req.body.storyChapterContent}})
    .then(response => {console.log('We get',response); res.send(response)})
    .catch(error => res.status(500).send(error))
})

// Route for searching user by username
app.get('/search/user', async(req, res) => {
    const keyword= req.query.keyword
    // Find all stories contain keyword
    User.find({username:{$regex: '.*' + keyword +'.*'}})
        .then(data => {res.status(200).send(data)})
        .catch(error => res.status(500).send(error))
})

//Route for getting all users
app.get('/search/alluser', async(req, res) => {
    User.find({username:{$regex: '.*'}})
        .then(data => {res.status(200).send(data)})
        .catch(error => res.status(500).send(error))
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


app.post('/api/edit', mongoChecker, async (req, res) => {
    if (checkSessionVaid(req)){
        res.status(404).send('Session expired')
        return 
    }
	try {
        console.log(req.body.userId)
		const user = await User.findById(req.body.userId)
		if (!user) {
			res.status(404).send('Resource not found')  
		} else {
            user.username= req.body.username
            user.firstName= req.body.firstName
            user.lastName= req.body.lastName
            user.age= req.body.age
            user.genrePref= req.body.genrePref
            const updated = await user.save()
			res.send(updated)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error') 
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
