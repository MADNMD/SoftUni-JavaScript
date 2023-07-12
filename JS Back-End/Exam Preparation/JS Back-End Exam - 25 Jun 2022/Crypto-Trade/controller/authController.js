const router = require('express').Router();

const authServices = require('../services/authServices');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessages } = require('../utils/errorHellper');
const { COOKIE_SESION_NAME } = require('../constants');

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {

    const { username, email, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.render('auth/register', { error: 'Password do not match' });
    }

    try {

        const createdUser = await authServices.create({ username, email, password });
        const token = await authServices.createToken(createdUser);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/register', { error: getErrorMessages(error) });
    }
});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await authServices.login( email, password );
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.render('auth/login', { error: getErrorMessages(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESION_NAME);
    res.redirect('/');
})

module.exports = router;