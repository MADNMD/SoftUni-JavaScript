const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/auth', authController);
router.use('*', (req, res) => {  // * за всички останали пътища директно ни прати на 404 страницата;
    res.render('404');
});

module.exports = router;