const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 4,
        // unique: true,
    },

    description: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 20,
    },

    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//i,
    },

    duration: {
        type: String,
        required: true,

    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;