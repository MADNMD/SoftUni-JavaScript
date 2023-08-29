const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { SECRET } = require('../config/env');

exports.create = (userData) => User.create(userData);

exports.login = async (email, password) => {

    const user = await User.findOne({ email });
   
    if (!user) {
        throw {
            message: 'Invalid email or password'
        }
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw {
            message: 'Invalid email or password'
        }
    }
    return user;
}

exports.createToken = (user) => {

    const payload = { _id: user._id, email: user.email, username: user.username };
    const option = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, option, (err, docodedToke) => {
            if (err) {
                return reject(err);
            }
            resolve(docodedToke);
        })
    });
    return tokenPromise;
}