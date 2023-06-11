const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        match: /^[A-Za-z]{3,}$/,
    },

    lastName: {
        type: String,
        required: true,
        match: /^[A-Za-z]{5,}$/,

    },

    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    password: {
        type: String,
        required: true,
        minlength: 4,
    },

    myPost: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;

            next();
        });
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
})

const User = mongoose.model('User', userSchema);

module.exports = User;