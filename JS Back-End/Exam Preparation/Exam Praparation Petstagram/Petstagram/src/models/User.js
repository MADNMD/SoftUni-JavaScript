const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [2, 'The username is required and should be at least 2 characters'],
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [10, 'The email is required and should be at least 10 characters'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'The password is required and should be at least 4 characters'],
    },

});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;