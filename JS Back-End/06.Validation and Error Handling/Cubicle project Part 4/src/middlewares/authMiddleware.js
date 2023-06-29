const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { sessionName, secret } = require('../constants');

const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {

    //тук проверяваме дали има логнат юзър като му взимаме токена за да можем да направим навигацията и бутоните който да са достъпни;

    let token = req.cookies[sessionName];

    if (token) {

        try {

            let decodedToken = await jwtVerify(token, secret);

            req.user = decodedToken;
            res.locals.user = decodedToken; //сетване юзъра да се достъпен за всички views. Живее само за request-та което означава че всеки user ще си има собствено такова; 

        } catch (error) {

            return res.redirect('/404');

        }
    }
    next();
}

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/404');
    }
    next();
}