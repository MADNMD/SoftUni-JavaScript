const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/env');
const { COOKIE_SESION_NAME } = require('../constants');

exports.auth = async (req, res, next) => {

    const token = req.cookies[COOKIE_SESION_NAME];

    if (token) {
        jwt.verify(token, SECRET, ((err, decodedToken) => {

            if (err) {
                res.clearCookie(COOKIE_SESION_NAME);

                res.redirect('/auth/login');
            }
            req.user = decodedToken;
            res.locals.user = decodedToken;

            next();
        }));
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
}

exports.isGuest = (req, res, next) => {

    if (req.user) {
        return res.redirect('/');
    }
    next();
}