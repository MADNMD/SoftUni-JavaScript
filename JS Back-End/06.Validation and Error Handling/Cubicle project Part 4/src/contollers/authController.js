const router = require('express').Router();

const authSevices = require('../services/authServices');
const { sessionName } = require('../constants');
const { isEmail } = require('../utils/validator');

router.get('/register', (req, res) => {

    res.render('auth/register');

});

router.post('/register', async (req, res, next) => { // тук вече може да извикаме next защото имае още един middleware след него и това е errorHanlera и да извикаме next на практика означава да извикаме errorHanlera. И next може да го вземем във всеки един action;

    if (!isEmail(req.body.username)) {

        let error = { message: 'Invalid email' };

       return next(error);
    }

    try {

        await authSevices.register(req.body);

        res.redirect('/auth/login');

    } catch (error) {

        // console.log(error);

        next(error);
    }
});

router.get('/login', (req, res) => {

    res.render('auth/login');

});

router.post('/login', async (req, res) => {

    try {
        const token = await authSevices.login(req.body);

        if (!token) {
            return res.redirect('404');
        }

        res.cookie(sessionName, token, { httpOnly: true }); // сетваме cookie на име session и запазваме токена вътре;
        // httpOnly защита кукито ще бъде четено само от браузъра на клиента и javaScripta  на бравузъра няма да чете кукито
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/login', { error: error.message })// статуса го слагаме когато паролата е объркана да не връща статус 200 а 4000;
    }
});

router.get('/logout', (req, res) => {

    res.clearCookie(sessionName);
    res.redirect('/');

});

module.exports = router;