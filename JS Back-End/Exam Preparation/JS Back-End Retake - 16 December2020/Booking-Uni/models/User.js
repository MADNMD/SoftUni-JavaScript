const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },

    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },

    password: {
        type: String,
        required: [true, 'Password must be at least 5 char'],
        minlength: 5,
    },

    bookedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel5'
    }],

    offeredHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel5'
    }],
});

// userSchema.index({ email: 1 }, { unique: true });
// userSchema.index({ username: 1 }, { unique: true });

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedpassword => {
            this.password = hashedpassword;

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;