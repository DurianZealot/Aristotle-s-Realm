/* Story model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const { ObjectID } = require('mongodb');

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const StorySchema = new mongoose.Schema({
    // story will have an ObjectID
	// storyId: {
	// 	type: String,
	// 	required: true,
	// 	minlength: 1,
	// 	trim: true,
	// 	unique: true,
	// }, 
	storyTitle: {
		type: String,
		required: true,
        minlength: 1,
        trim: true,
    },
    storyAuthorUsername: {
        type: String,
        required: true,
        minlength: 1
    },
    storyAuthorID: {
        type: ObjectID,
        required: true
    },
    storyDate: {
		type: Date,
		required: true,
        minlength: 1,
        trim: true,
    },
    storyViewCount: {
		type: Number,
		required: true,
        minlength: 1,
        trim: true,
    },
    storyTags: {
		type: [String],
		required: true,
        minlength: 1,
        trim: true,
    },
    storyVotes: {
		type: [Number],
		required: true,
        minlength: 1,
        trim: true,
    },
    storyChapters: {
        type:[String],
        required: true,
        minlength: 1,
        trim: true,
    }
})

// make a model using the User schema
const Story = mongoose.model('Story', StorySchema)
module.exports = { Story }