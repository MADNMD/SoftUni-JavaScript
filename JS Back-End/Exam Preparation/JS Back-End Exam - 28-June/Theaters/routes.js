const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const theaterController = require('./controllers/theaterController');

router.use(homeController);
router.use('/auth', authController);
router.use('/theater', theaterController);

module.exports = router;