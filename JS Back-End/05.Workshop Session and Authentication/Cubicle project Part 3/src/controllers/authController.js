const router = require('express').Router();

const authSevices = require('../services/authServices');
const { sessionName } = require('../constants');

router.get('/register', (req, res) => {

    res.render('auth/register');

});

router.post('/register', async (req, res) => {

    const createdUser = await authSevices.register(req.body);

    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        res.redirect('404');
    }
});

router.get('/login', (req, res) => {

    res.render('auth/login');

});

router.post('/login', async (req, res) => {

    const token = await authSevices.login(req.body);

    if (!token) {
        return res.redirect('404');
    }

    res.cookie(sessionName, token, { httpOnly: true }); // сетваме cookie на име session и запазваме токена вътре;
    // httpOnly защита кукито ще бъде четено само от браузъра на клиента и javaScripta  на бравузъра няма да чете кукито
    res.redirect('/');

});

router.get('/logout', (req, res) => {

    res.clearCookie(sessionName);
    res.redirect('/');

});

module.exports = router;