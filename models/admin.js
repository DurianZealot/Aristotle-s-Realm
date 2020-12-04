/* User model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const AdminSchema = new mongoose.Schema({
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
})

/*
// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
AdminSchema.pre('save', function(next) {
	const admin = this; // binds this to admin document instance

	// checks to ensure we don't hash password more than once
	if (admin.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(admin.password, salt, (err, hash) => {
                admin.password = hash
                console.log(admin)
				next()
			})
		})
	} else {
		next()
	}
})
*/


AdminSchema.statics.findByUsername = function(username, password) {
	const Admin = this // bind this to the Admin model

	// First find the admin by username
	return Admin.findOne({ username: username }).then((admin) => {
		if (!admin) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {

            if(password == "admin"){
                resolve(admin)
            }
            else{
                reject
            }
		})
	})
}

// make a model using the User schema
const Admin = mongoose.model('Admin', AdminSchema)
module.exports = { Admin }

