const router = require('express').Router();

const authServices = require('../services/authServices');
const { COOKIE_SESSION_NAME } = require('../constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await authServices.login(username, password);
        const token = await authServices.createToken(user);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        return res.render('auth/login', {error: getErrorMessage(error) })
    }


    // const user = await authServices.login(username, password);
    // const token = await authServices.createToken(user);


    // res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });

    // res.redirect('/');

})

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {

    const { username, password, repeatPassword, address } = req.body;
    
    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Password missmatch' });
    }

    try {

        const createdUser = await authServices.create({ username, password, address });
        const token = await authServices.createToken(createdUser);
    
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');

    } catch (error) {

        return res.render('auth/register', { error: getErrorMessage(error) });

    }
});

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/');

});

module.exports = router;