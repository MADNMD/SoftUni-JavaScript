const router = require('express').Router();

const courseServices = require('../services/courseServices');

router.get('/', async (req, res) => {

    if (req.user) {
        const allCourse = await courseServices.getAll().lean();

        res.render('home', { allCourse,  sitePage: 'Home Page' });
    } else {
        const sortedCourse = await courseServices.getAll().lean();
        sortedCourse.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length);
        const allCourse = sortedCourse.slice(0, 3);

        res.render('home', { allCourse, sitePage: 'Home Page' });
    }
});

module.exports = router;