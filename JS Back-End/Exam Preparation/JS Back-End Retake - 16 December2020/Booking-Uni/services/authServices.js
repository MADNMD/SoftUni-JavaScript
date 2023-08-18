const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET } = require('../config/evn');

exports.create = (userData) => User.create(userData);

exports.login = async (username, password) => {

    const user = await User.findOne({ username });
    
    if (!user) {
        throw{
            message: 'Invalid username or password'
        }
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw{
            message: 'Invalid username or password'
        }
    }
    return user;
}

exports.createToken = (user) => {

    const payload = { _id: user._id, email: user.email, username: user.username };
    const option = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, option, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });
    return tokenPromise;
}