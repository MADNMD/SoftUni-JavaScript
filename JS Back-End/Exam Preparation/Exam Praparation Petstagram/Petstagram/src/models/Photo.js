const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'The name is required and should be at least 2 characters'],
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\//, 'The photo image is required and should start with http:// or https://'],
    },

    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'The age is required and should be at least 1 and no longer than 100 characters'],
        max: [100, 'The age is required and should be at least 1 and no longer than 100 characters']
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [5, 'The description is required and should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'The description is required and should be at least 5 and no longer than 50 characters.'],
    },

    location: {
        type: String,
        required: true,
        minLength: [5, 'The location is required and should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'The location is required and should be at least 5 and no longer than 50 characters.'],
    },

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    comments: [{
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
        },
    }],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;