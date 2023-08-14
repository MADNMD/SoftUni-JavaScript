const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, 'Invalid email format'],
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'The password should be at least 4 characters'],
    },

    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['male', 'female'],
    },

    tripHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip',
    }],
});

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;