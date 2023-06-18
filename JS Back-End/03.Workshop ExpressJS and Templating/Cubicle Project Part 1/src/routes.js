const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeContreller');

router.use('/', homeController);
router.use('/cube', cubeController);

module.exports = router;