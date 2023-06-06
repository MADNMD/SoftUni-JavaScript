const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const postController = require('./controller/postController');

router.use(homeController);
router.use('/auth', authController);
router.use('/post', postController);
router.use('*', (req, res) => {
   res.render('404', { sitePage: '404 Page' });
});


module.exports = router;