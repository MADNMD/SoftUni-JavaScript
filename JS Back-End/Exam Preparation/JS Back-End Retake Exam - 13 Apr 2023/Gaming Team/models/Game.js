const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 4,
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: /^https?:\/\//i
    },

    price: {
        type: Number,
        required: [true, 'Price is requreid'],
        minValue: 0,
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: 10,
    },

    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minlength: 2,
    },

    platform: {
        type: String,
        required: [true, 'Platform is required'],
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
    },

    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;