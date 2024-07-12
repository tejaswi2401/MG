const mongoose = require('mongoose');


// Define a new Mongoose schema for the User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Create a model for the User schema
const User = mongoose.model('User', userSchema);














module.exports = {User};