const router = require('express').Router();

const homeController = require('../src/controllers/homeController');
const authController = require('../src/controllers/authController');
const realEstateController = require('../src/controllers/realEstateController');

router.use(homeController);
router.use('/auth', authController);
router.use('/offer', realEstateController);
router.use('*', (req, res) => {
    res.render('404', { pageTitle: '404 Page' });
});

module.exports = router;