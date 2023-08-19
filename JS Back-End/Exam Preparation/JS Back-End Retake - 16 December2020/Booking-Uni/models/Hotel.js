const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({

    hotel: {
        type: String,
        unique: true,
        required: [true, 'Hotel name must be at least 4 chars long'],
    },

    city: {
        type: String,
        required: [true, 'City name must be at least 3 chars long'],
    },

    imgUrl: {
        type: String,
        required: [true, 'Imgae URL is required'],
        validate: /^https?:\/\//i,
    },

    freeRooms: {
        type: Number,
        required: [true, 'Free rooms must be between 1 and 100'],
        min: 1,
        max: 100,
    },

    usersBooked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Hotel = mongoose.model('Hotel5', hotelSchema);

module.exports = Hotel;