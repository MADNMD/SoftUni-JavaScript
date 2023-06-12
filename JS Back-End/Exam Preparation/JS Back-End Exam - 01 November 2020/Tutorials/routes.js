const router = require('express').Router();

const homeContoller = require('./controller/homeController');
const authController = require('./controller/authController');
const courseController = require('./controller/courseController');

router.use(homeContoller);
router.use('/auth', authController);
router.use('/course', courseController);

module.exports = router;