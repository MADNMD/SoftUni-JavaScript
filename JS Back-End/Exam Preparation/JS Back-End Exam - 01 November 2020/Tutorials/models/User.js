const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
    },

    enrolledCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
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