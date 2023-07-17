const router = require('express').Router();

const jobServices = require('../services/jobServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/all-ads', async (req, res) => {

    const allJobs = await jobServices.getAll().lean();

    res.render('job/all-ads', { allJobs, pageTitle: 'All-Ads Page' });

});

router.get('/create', isAuth, (req, res) => {
    res.render('job/create', { pageTitle: 'Create Page' })
});

router.post('/create', isAuth, async (req, res) => {

    try {
        await jobServices.create({ ...req.body, author: req.user._id });

        res.redirect('/jobs/all-ads');
    } catch (error) {
        return res.render('job/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/details/:jobId', async (req, res) => {

    const job = await jobServices.getOneDetailed(req.params.jobId).lean();
    const getUsersApplied = await jobServices.getUsersApplied(req.params.jobId).lean();

    const candidates = getUsersApplied.usersApplied;
    const isOwner = job.author._id == req.user?._id;
    const isApplay = job.usersApplied.some(user => user._id == req.user?._id);

    res.render('job/details', { ...job, isOwner, candidates, isApplay, pageTitle: 'Details Page' });
});

router.get('/edit/:jobId', isAuth, async (req, res) => {

    const job = await jobServices.getOne(req.params.jobId).lean();

    res.render('job/edit', { ...job, pageTitle: 'Edit Page' });
});

router.post('/edit/:jobId', isAuth, async (req, res) => {

    const editJob = req.body;

    try {
        await jobServices.editJob(req.params.jobId, editJob);

        res.redirect(`/jobs/details/${req.params.jobId}`);
    } catch (error) {
        return res.render('job/edit', { ...editJob, error: getErrorMessage(error) });
    }
});

router.get('/delete/:jobId', isAuth, async (req, res) => {

    await jobServices.delete(req.params.jobId);

    res.redirect('/jobs/all-ads');
});

router.get('/apply/:jobId', isAuth, async (req, res) => {

    const job = await jobServices.getOne(req.params.jobId);

    job.usersApplied.push(req.user._id);

    await job.save();

    res.redirect(`/jobs/details/${req.params.jobId}`);
});

module.exports = router;