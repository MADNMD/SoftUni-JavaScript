const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const hotelsController = require('./controller/hotelsController');

router.use(homeController);
router.use('/auth', authController);
router.use('/hotels', hotelsController);

module.exports = router;