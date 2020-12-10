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
    // storyAuthorUsername: {
    //     type: String,
    //     required: true,
    //     minlength: 1
    // },

    storyLine:{
        type: String,
        required: false,
        default: ""
    },
    
    storyAuthorID: {
        type: mongoose.Schema.Types.ObjectID, ref: 'User',
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
        default:0
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
        default: [0,0]
    },
    storyChapters: {
        type:[String],
        required: true,
        minlength: 1,
        trim: true,
        default: []
    },
    storyPreview :{
        type: String,
        required: false
    }
})

// Find a story by the story name and author
// An author cannot write two stories with the same title
StorySchema.statics.findByStoryNameAndAuthor = function(storyName, storyAuthorID){
    const Story = this

    return Story.findOne({"storyTitle": storyName, "storyAuthorID": storyAuthorID}).then((story) => {
        if(!story){
            return Promise.resolve()
        }
        else{
            // Duplicate
            return Promise.reject()
        }
    })
}

// make a model using the User schema
const Story = mongoose.model('Story', StorySchema)
module.exports = { Story }