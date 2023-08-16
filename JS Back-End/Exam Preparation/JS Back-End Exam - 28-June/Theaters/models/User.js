const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minlength: 3,
        // match: /^[A-Za-z0-9]+$/,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        // match: /^[A-Za-z0-9]+$/,
    },

    likedPlays: [{
        type: mongoose.Types.ObjectId,
        ref: 'Theater',
    }],
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedpassword => {
            this.password = hashedpassword;

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;