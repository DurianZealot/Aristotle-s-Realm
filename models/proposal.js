/* Proposal model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const { ObjectID } = require('mongodb');
const Schema = mongoose.Schema;

const ProposalSchema = new mongoose.Schema(
    {   
        // The story ID that this proposal is proposing to 
        proposeToID: {
             type: Schema.Types.ObjectId, ref: 'Story',
             required: true
        },

        // The story title that this proposal is proposing to 
        proposeToTitle: {
            type: String,
            required: true,
            trim: true
        },
        
        // The id of user who is making this proposal
        proposeByID: {
            type: Schema.Types.ObjectID, ref: 'User',
            required: true
        },

        // The username of user who is making this proposal
        proposeByUsername: {
            type: String,
            required: true
        },

        // chapter
        proposeChapter: {
            type: Number,
            required: true
        },

        // visibility : public(1) / private(0)
        // maybe not that necessary, just put it here
        visibility: {
            type: Boolean,
            required: true,
            default: true
        },

        // content
        content: {
            type: String,
            required: true
        },

        // status of the proposal : accpeted/declined/pending/private
        status: {
            type: String,
            required: true
        }
    }
)

ProposalSchema.statics.findByStoryIDAuthorIDAndContent = function(storyID, authorID, content) {
    const Proposal = this
    return Proposal.findOne({proposeToID: storyID, proposeByID: authorID, content: content}).then((proposal) => {
        if(!proposal){
            // No duplicate
            return Promise.resolve()
        }
        else{
            // Duplicate
            return Promise.reject()
        }
    })
}

// make a model using the Proposal schema
const Proposal = mongoose.model('Proposal', ProposalSchema)
module.exports = { Proposal }