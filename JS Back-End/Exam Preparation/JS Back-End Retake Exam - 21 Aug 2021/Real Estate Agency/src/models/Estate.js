const mongoose = require('mongoose');

const esateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [6, 'The Name should be at least 6 characters'],
    },

    type: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['Apartment', 'Villa', 'House'],
    },

    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1850, 'The Year should be between 1850 and 2021'],
        max: [2021, 'The Year should be between 1850 and 2021'],
    },

    city: {
        type: String,
        required: [true, 'City is required'],
        minLength: [4, 'The City should be at least 4 characters'],
    },

    homeImage: {
        type: String,
        required: [true, 'Home image is required'],
        match: [/^https?:\/\//, 'The Home Image should starts with http:// or https://'],
    },

    propertyDescription: {
        type: String,
        required: [true, 'Property description is required'],
        maxLength: [60, 'The Property Description should be a maximum of 60 characters'],
    },

    availablePieces: {
        type: Number,
        required: [true, 'Available is required'],
        min: [0, 'The Available Pieces should be positive number (from 0 to 10)'],
        max: [10, 'The Available Pieces should be positive number (from 0 to 10)'],
    },

    rentedHome: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    rentedName: [{
        type: String,
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Estate = mongoose.model('Estate', esateSchema);

module.exports = Estate;