const mongoose = require('mongoose');

// Define the assignmentSchema
const assignmentSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    dueDate: Date,
    progress: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    isCompleted: Boolean
});

// Define the subjectSchema
const subjectSchema = new mongoose.Schema({
    name: String,
    assignments: [assignmentSchema]
});

// Define the userSchema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    subjects: [subjectSchema]
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;