const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env');

exports.create = (userData) => User.create(userData);

exports.login = async (username, password) => {

    const user = await User.findOne({ username });
    
    if (!user) {

        throw {
            message: 'Invalid username or password'
        }
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
        throw {
            message: 'Invalid username or password'
        }
    }
    return user;
}

exports.createToken = (user) => {

    const payload = { _id: user._id, username: user.username, address: user.address };
    const option = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, rejcet) => {
        jwt.sign(payload, SECRET, option, (err, decodeToken) => {
            if (err) {
                return rejcet(err);
            }
            resolve(decodeToken);
        });
    });
    return tokenPromise;
}