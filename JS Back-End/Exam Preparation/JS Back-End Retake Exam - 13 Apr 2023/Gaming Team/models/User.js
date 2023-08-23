const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: 5,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: 10,
    },
    password: {
        type: String,
        required: [true, 'Password is reqired'],
        minlength: 4,
    }

});

userSchema.pre('save', function (next) { // function expresion заради контекста да може да ползваме this с => функция не става
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;

            next();
        });
})

const User = mongoose.model('User', userSchema);

module.exports = User;