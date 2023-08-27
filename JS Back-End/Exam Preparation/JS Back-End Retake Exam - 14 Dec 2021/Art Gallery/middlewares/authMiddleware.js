const jwt = require('jsonwebtoken');

const { COOKIE_SESSION_NAME } = require('../constants');
const { SECRET } = require('../config/env');

exports.auth = (req, res, next) => {

    const token = req.cookies[COOKIE_SESSION_NAME];
  
    if (token) {
        jwt.verify(token, SECRET, ((err, docodedToken) => {
            if (err) { // ако токена е невалиден, разлогваме го от невалидната сесия 
                res.clearCookie(COOKIE_SESSION_NAME); //изтриваме сесията(cookie);

              return res.redirect('/auth/login') //това зависи от условието дали да е redirect или  return;
                // return next(err);
            }

            req.user = docodedToken;
            res.locals.user = docodedToken;// когато закрепим user в locals разбираме дали има логнат user и оправяме навигацията;

            next();
        }));
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => { // ако не си логнат и неможе да достъпиш страницата отиваш на логин страницата;
    
    if(!req.user){
        return res.redirect('/auth/login');
    }
    next();
}

exports.isGuest = (req, res, next) => { // ако си логнат и нямаш право да ходиш там редирект към главната страница;
    
    if(req.user){
        return res.redirect('/');
    }
    next();
}