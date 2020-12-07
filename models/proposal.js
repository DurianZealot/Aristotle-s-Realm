/* Proposal model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const { ObjectID } = require('mongodb');

const ProposalSchema = new mongoose.Schema(
    {   
        // The story ID that this proposal is proposing to 
        proposeToID: {
            type: ObjectID,
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
            type: ObjectID,
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
        visibility: {
            type: Boolean,
            required: true
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


// make a model using the Proposal schema
const Proposal = mongoose.model('Proposal', ProposalSchema)
module.exports = { Proposal }