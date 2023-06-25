const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('../models/User');
const { saltRounds, secret } = require('../constants');

// const saltRounds = 10;
// const secret = 'djakjjfldsnlksjfabdhasgdywgheban';

exports.register = async ({ username, password, repeatPassword }) => {

    if (password != repeatPassword) {
        return false;
    };

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword,
    });

    return createdUser;
}

exports.login = async ({ username, password }) => {

    const user = await User.findOne({ username });

    if (!user) {
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return;
    }

    // const jwtPromiseSign = promisify(jwt.sign);
    // jwtPromiseSign()

    let result = new Promise((resolve, reject) => {
        // expiresIn колко време да е валиден tokenа
        jwt.sign({ _id: user._id, username: user.username }, secret, { expiresIn: '2d' }, (err, token) => {

            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });
    return result;
}