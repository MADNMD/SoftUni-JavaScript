const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            message: 'Invalie email or password'
        }
    }
    return user;
}

exports.createToken = (user) => {

    const payload = { _id: user._id, username: user.username, email: user.email };
    const option = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, option, (err, docededToken) => {
            if (err) {
                return reject(err);
            }
            resolve(docededToken);
        });
    });
    return tokenPromise;
}