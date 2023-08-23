const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const gameServices = require('../services/gamesServices');

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/search', isAuth, async (req, res) => {

    const gameText = req.query.name;
    const gamePlatform = req.query.platform;
   
    let games = await gameServices.search(gameText, gamePlatform);

    if (games == undefined) {
        games = await gameServices.allGame().lean();
    }

    res.render('search', { games });
});

module.exports = router