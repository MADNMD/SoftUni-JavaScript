const router = require('express').Router();

const authServices = require('../services/authServices');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { COOKIE_CONECTION_STRING } = require('../constans');
const { getErrorMEssage } = require('../utils/errorHellper');

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { sitePage: 'Register Page' });
});

router.post('/register', isGuest, async (req, res) => {

    const { username, password, rePassword } = req.body;

    if (password !== rePassword) {
        return res.render('auth/register', { ...req.body, error: 'Password missmatch' });
    }

    try {

        const createdUser = await authServices.create({ username, password });
        const token = await authServices.createToken(createdUser);

        res.cookie(COOKIE_CONECTION_STRING, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('auth/register', { ...req.body, error: getErrorMEssage(error) });
    }

});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { sitePage: 'Login Page' });
});

router.post('/login', isGuest, async (req, res) => {

    const { username, password } = req.body;

    try {

        const user = await authServices.login(username, password);
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_CONECTION_STRING, token, { httpOnly: true });
        res.redirect('/');

    } catch (error) {
        return res.render('auth/login', { ...req.body, error: getErrorMEssage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie(COOKIE_CONECTION_STRING);
    res.redirect('/');
});

module.exports = router;