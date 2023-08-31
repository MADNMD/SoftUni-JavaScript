const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'email is required'],
        minlength: 10,
    },

    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: 4,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 3,
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;