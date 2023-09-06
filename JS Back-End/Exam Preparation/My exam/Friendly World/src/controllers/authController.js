const router = require('express').Router();

const authServices = require('../services/authServices');
const { getErrorMessage } = require('../utils/errorHellper');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { COOKIE_SESION_NAME } = require('../constants')

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { pageTitle: 'Login Page' });
});

router.post('/login', isGuest, async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await authServices.login(email, password);
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/login', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { pageTitle: 'Register Page' });
});

router.post('/register', isGuest, async (req, res) => {

    const { email, password, rePassword } = req.body;

    if (password !== rePassword) {
        return res.render('auth/register', { ...req.body, error: 'Password missmatch' })
    }

    try {

        const createdUser = await authServices.create({ email, password, rePassword });
        const token = await authServices.createToken(createdUser);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/register', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESION_NAME);
    res.redirect('/');
});

module.exports = router;