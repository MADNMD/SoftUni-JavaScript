const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        match: /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minLength: 5,
    },

    firstName: {
        type: String,
        required: true,
        minLength: 1,
    },

    lastName: {
        type: String,
        required: true,
        minLength: 1,
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword

            next();
        });
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
});

const User = mongoose.model('User', userSchema);

module.exports = User;