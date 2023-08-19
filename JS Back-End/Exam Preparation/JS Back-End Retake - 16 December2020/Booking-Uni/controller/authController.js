const router = require('express').Router();


const authServices = require('../services/authServices');
const { isAuth, isGuest } = require('../middleware/authMiddleware');
const { COOKIE_SESION_NAME } = require('../constants');
const { getErrorMessage } = require('../util/errorHellper');

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/register', isGuest, async (req, res) => {

    const { email, username, password, rePassword } = req.body;

    if (password !== rePassword) {
        return res.render('auth/register', { ...req.body, error: 'Password missmatch' });
    }

    try {
        const createdUSer = await authServices.create({ email, username, password });
        const token = await authServices.createToken(createdUSer);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/register', { ...req.body, error: getErrorMessage(error) });
    }

});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
});

router.post('/login', isGuest, async (req, res) => {

    const { username, password } = req.body;
   
    try {

        const user = await authServices.login(username, password);
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_SESION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('auth/login', { ...req.body,  error: getErrorMessage(error) });
    }

});

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie(COOKIE_SESION_NAME);
    res.redirect('/');
});
module.exports = router;