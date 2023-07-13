const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const jobController = require('./controllers/jobController');

router.use(homeController);
router.use('/auth', authController);
router.use('/jobs', jobController);
router.use('*', (req, res) => {
    res.render('404', { pageTitle: '404 Page' })
});

module.exports = router;