const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { SALT_ROUDS } = require('../config/env');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: 5,
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: 10
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 4,
    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, SALT_ROUDS)
        .then(hashedpassword => {
            this.password = hashedpassword;

            next();
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;