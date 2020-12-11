/* User model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
	}, 
	password: {
		type: String,
		required: true,
		minlength: 1
	},
	firstName: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	lastName: {
		type: String,
		required: true,
		minlength: 1
	},
	age: {
		type: Number,
		required: false
	},
	genrePref: {	// Preferred Genre type(s)
		type: [String],
		required: true,
		default: ['None']
	},
	approvalRate: {	// Approval rate, from 0 to 100, percentage
		type: Number,
		required: true,
		default: 100
	},
	proposalAcceptNum: { // Number of proposals accepted by other authors
		type: Number,
		required: true,
		default: 0
	},
	worksBegunNum: {	// Number of works the user has created thus far
		type: Number,
		required: true,
		default: 0
	},
	LastContributionDate: {	// Date when the user last contributed
		type: Date,
		required: true,
		default: Date.now
	}

	// ===========Need the variables below===========
	// iconPath: "icon/profile-icon-placeholder.png",
	// age: "20",
	// genrePref: "Sci-Fi",

	// joinDate: "December 21",
	// followerCount: "6666",
	// followingCount: "420",
	// approvalRate: "69",

	// proposalAcceptNum: "9",
	// worksBegunNum: "11",
	// lastContributionDate: "Oct 31, 2020",
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByEmailPassword = function(email, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

UserSchema.statics.findByUsername = function(username, password) {
	const User = this // bind this to the User model

	// First find the user by their email
	return User.findOne({ username: username }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }

