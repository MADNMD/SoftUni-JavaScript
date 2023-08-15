const router = require('express').Router();

const tripServices = require('../services/tripServices');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home Page' });
});

router.get('/profile', isAuth, async (req, res) => {

    const myTrip = await tripServices.getAllPerson(req.user._id).lean();
    const tripHistory = myTrip.length;

    res.render('home/profile', { myTrip, tripHistory, titpePage: 'Profile Page' });
})

module.exports = router;