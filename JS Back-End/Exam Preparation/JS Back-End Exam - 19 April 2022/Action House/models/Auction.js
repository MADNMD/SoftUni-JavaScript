const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Title field is required'],
        minLength: [4, 'The title should be a minimum of 4 characters long'],
    },

    description: {
        type: String,
        maxLength: [200, 'Description can be max 200 characters'],
    },

    category: {
        type: String,
        required: [true, 'Category field is required'],
        enum: ['vehicles', 'estate', 'electronics', 'furniture', 'other',],
    },

    imageUrl: {
        type: String,
    },

    price: {
        type: Number,
        required: [true, 'Price field is required'],
        min: [0, 'The price cannot be negative number'],
        default: 0,
    },

    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    bidder: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    closed: {
        type: Boolean,
        default: false,
    },
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;