const jwt = require('jsonwebtoken');

const { COOKIE_CONECTION_STRING } = require('../constans');
const { SECRET } = require('../config/env');

exports.auth = (req, res, next) => {

    const token = req.cookies[COOKIE_CONECTION_STRING];

    if (token) {
        jwt.verify(token, SECRET, ((err, decodedToken) => {
            if (err) {
                res.clearCookie(COOKIE_CONECTION_STRING);

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