const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Email shoud be unique'],
        validate: /[a-zA-Z0-9]/,
        minlength: 5,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: /[a-zA-Z0-9]/,
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;