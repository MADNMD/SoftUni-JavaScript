const router = require('express').Router();

const authServices = require('../services/auth.Services');
const { COOKIE_SESION_NAME } = require('../constants');
const { getErrorMessage } = require('../util/errorHellper');
const { isAuth, isGuest } = require('../middleware/authMiddleware');

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register', {...req.body});
});

router.post('/register', isGuest, async (req, res) => {

    const { email, username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Password do not match' });
    }

    try {

        const createdUser = await authServices.create({ email, username, password });
        const token = await authServices.createToken(createdUser);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/register', { error: getErrorMessage(error) });
    }

});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await authServices.login(email, password);
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/login', { error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESION_NAME);
    res.redirect('/');
});

module.exports = router;