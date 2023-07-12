const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name must be minimum 2 character'],
        minlength: 2
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: /^https?:\/\//i
    },

    price: {
        type: Number,
        required: [true, 'Price must be positive number'],
        minValue: 0,
    },

    description: {
        type: String,
        required: [true, 'Description must be minimun 10 character long'],
        minlength: 10,
    },

    payMethod: {
        type: String,
        required: [true, 'Payment Method is required'],
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
    },

    buyCrypto: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;