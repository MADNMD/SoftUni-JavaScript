const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const cryptoController = require('./controller/cryptoController');

router.use(homeController);
router.use('/auth', authController);
router.use('/trade', cryptoController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;