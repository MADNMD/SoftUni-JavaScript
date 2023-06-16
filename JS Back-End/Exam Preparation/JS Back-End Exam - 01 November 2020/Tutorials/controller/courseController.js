const router = require('express').Router();

const { getErrorMEssage } = require('../utils/errorHellper');
const { isAuth } = require('../middlewares/authMiddleware');
const courseServices = require('../services/courseServices');
const userServices = require('../services/userServices');

router.get('/create', isAuth, (req, res) => {
    res.render('course/create-course', { sitePage: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const courseData = { ...req.body, owner: req.user._id };

    try {

        await courseServices.create(courseData);
        res.redirect('/');
    } catch (error) {
        return res.render('course/create-course', { ...req.body, error: getErrorMEssage(error) });
    }
});

router.get('/details/:courseId', isAuth, async (req, res) => {

    const course = await courseServices.getOneDetailed(req.params.courseId).lean();
    const isOwner = course.owner._id == req.user?._id;
    const isEnrolled = course.usersEnrolled.some(user => user._id == req.user?._id);

    res.render('course/course-details', { ...course, isOwner, isEnrolled, sitePage: 'Details Page' });
});

router.get('/edit/:courseId', isAuth, async (req, res) => {

    const course = await courseServices.getOne(req.params.courseId).lean();

    res.render('course/edit-course', { ...course, sitePage: 'Edit Page' });
});

router.post('/edit/:courseId', isAuth, async (req, res) => {

    await courseServices.update(req.params.courseId, req.body);

    res.redirect(`/course/details/${req.params.courseId}`);
});

router.get('/delete/:courseId', isAuth, async (req, res) => {

    await courseServices.delete(req.params.courseId);

    res.redirect('/');
});

router.get('/enroll/:courseId', isAuth, async (req, res) => {

    const course = await courseServices.getOne(req.params.courseId);
    const user = await userServices.getOne(req.user._id);

    course.usersEnrolled.push(req.user._id);
    user.enrolledCourses.push(course);

    await course.save();
    await user.save();

    res.redirect(`/course/details/${req.params.courseId}`);
});

router.get('/search', isAuth,  async (req, res) => {

    const courseText = req.query.title;
    let allCourse = await courseServices.search(courseText);

    if (allCourse == undefined) {
        allCourse = await courseServices.getAll().lean();
    }
    res.render('home', { allCourse, sitePage: 'Home Page' });
});


module.exports = router; 