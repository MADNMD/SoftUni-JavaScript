const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const gamesController = require('./controller/gamesController');

router.use(homeController);
router.use('/auth', authController);
router.use('/game', gamesController);
router.use('*', (req, res) => {
   res.render('404');
});


module.exports = router;