const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
        maxlength: 50,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    isPublic: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

    usersLiked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

let Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;