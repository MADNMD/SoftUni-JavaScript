const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 6,
    },

    keyword: {
        type: String,
        required: true,
        minlength: 6,
    },

    location: {
        type: String,
        required: true,
        maxlength: 15,
    },

    dateOfCreation: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length === 10;
            },
            message: 'Date must be exactly 10 characters long',
        }
    },

    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },

    description: {
        type: String,
        required: true,
        minlength: 8,
    },

    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    votesOnPost: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],

    votedByEmails: [{
        type: String,
    }],

    ratingOfPost: {
        type: Number,
        default: 0,
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;