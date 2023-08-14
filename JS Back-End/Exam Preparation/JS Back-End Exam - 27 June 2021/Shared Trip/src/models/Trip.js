const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    stratPoint: {
        type: String,
        required: [true, 'Start point is required'],
        minLength: [4, 'The Starting Point should be at least 4 characters long'],
    },

    ednPoint: {
        type: String,
        required: [true, 'Edn point is required'],
        minLength: [4, 'The End Point should be at least 4 characters long'],
    },

    date: {
        type: String,
        required: [true, 'Date is required'],
    },

    time: {
        type: String,
        required: [true, 'Time is required'],
    },

    carImage: {
        type: String,
        required: [true, 'Car image is rquired'],
        validate: [/^https?:\/\//i, 'Car Image must start with http:// or https://'],
    },

    carBrand: {
        type: String,
        required: [true, 'Car brand is required'],
        minLength: [4, 'The Car Brand should be minimum 4 characters'],
    },

    seats: {
        type: Number,
        required: [true, 'Seats is required'],
        min: [0, 'Minimum number of passengers 0'],
        max: [4, 'Maximum number of passengers is 4']
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Minimum price is 1'],
        max: [50, 'Maximum price is 50'],
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'The Description should be minimum 10 characters'],
    },

    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    buddies: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    contactsPassengers: [{
        type: String,
    }],
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
