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


/**MIDDLEWARE */
// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const { request } = require("http");
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
            expires: 6,
            httpOnly: true
        }
    })
);

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

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // log the previous session 
    log(req.session)
    // Remove the session 
    req.session.destroy(error => {
        if (error){
            res.status(500).send(error)
        }
        else{
            console.log(req.session)
            // the session already expire 
            res.status(400).send('Login Session Expired')
        }
    })
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
