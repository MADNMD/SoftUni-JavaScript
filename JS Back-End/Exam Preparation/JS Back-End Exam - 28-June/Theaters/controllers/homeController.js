const router = require('express').Router();

const theaterServices = require('../services/theatreServices');

router.get('/', async (req, res) => {

    if (req.user) {
        const allPlays = await theaterServices.getAll().lean();

        res.render('home', { allPlays, titlePage: 'Home Page' });
    } else {
        const plays = await theaterServices.getAll().lean();
        plays.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
        const allPlays = plays.slice(0, 3);
        console.log(allPlays)
        res.render('home', { allPlays, titlePage: 'Home Page' });
    }
});

module.exports = router;