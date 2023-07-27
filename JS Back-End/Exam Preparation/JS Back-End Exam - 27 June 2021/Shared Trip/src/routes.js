const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const tripController = require('./controllers/tripController');

router.use(homeController);
router.use('/auth', authController);
router.use('/trip', tripController);
router.use('*', (req, res) => {
    res.render('404', {titlePage: '404 Page'});
});

module.exports = router;