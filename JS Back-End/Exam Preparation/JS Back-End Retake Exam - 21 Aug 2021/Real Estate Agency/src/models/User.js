const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[a-zA-Z]+ [a-zA-Z]+$/, 'The name should be in the following format -> (firstname lastname)'],
    },

    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [5, 'The username should be at least 5 characters'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'The password should be at least 4 characters '],
    }
});

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;