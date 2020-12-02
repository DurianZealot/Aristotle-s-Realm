const mongoose = require('mongoose')

// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.Atlas_URI || 'mongodb://localhost:27017/StudentAPI'
   
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
module.exports = { mongoose }  // Export the active connection.