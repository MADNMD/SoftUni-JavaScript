const jwt = require('jsonwebtoken');

const { COOKIE_SESION_NAME } = require('../constants');
const { SECRET } = require('../config/env');

exports.auth = (req, res, next) => {

    const token = req.cookies[COOKIE_SESION_NAME];

    if (token) {
        jwt.verify(token, SECRET, ((err, decodedToken) => {
            if (err) {
                res.clearCookie(COOKIE_SESION_NAME);

                return res.redirect('/auth/login');
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