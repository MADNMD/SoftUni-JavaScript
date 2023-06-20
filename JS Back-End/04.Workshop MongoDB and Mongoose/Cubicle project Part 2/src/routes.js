const router = require('express').Router();

const homeContoller = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');

router.use('/', homeContoller);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);

module.exports = router;