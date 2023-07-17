const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/evn');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        match: /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [5, 'The password should be at least 5 characters'],
    },

    descriptionSkills: {
        type: String,
        required: [true, 'Skills is required'],
        maxLength: [40, 'The description of skills should be a maximum of 40 characters'],
    },

    myAd: [{
        type: mongoose.Types.ObjectId,
        ref: 'Job',
    }],
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
})

// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, SALT_ROUNDS)
//         .then(hashedPassword => {
//             this.password = hashedPassword;

//             next();
//         });
// });

const User = mongoose.model('User', userSchema);

module.exports = User;