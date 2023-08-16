const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const theaterServices = require('../services/theatreServices');
const userServices = require('../services/userServices');
const { getErrorMessage } = require('../util/errorHellper');

router.get('/create', isAuth, (req, res) => {
    res.render('theater/create-theater', { titlePage: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const createTheater = { ...req.body, owner: req.user._id };

    const isPublicBoolen = createTheater.isPublic === 'on' ? true : false;
    createTheater.isPublic = isPublicBoolen;

    try {

        if (createTheater.title === '' || createTheater.description === '' || createTheater.imageUrl === '') {
            throw {
                message: 'You can not have empty fields'
            }
        }

        await theaterServices.create(createTheater);
        res.redirect('/');
    } catch (error) {
        return res.render('theater/create-theater', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/details/:theaterId', isAuth, async (req, res) => {

    const theaterPlays = await theaterServices.getOneDetailed(req.params.theaterId).lean();

    const isOwner = theaterPlays.owner._id == req.user?._id;
    const isLiked = theaterPlays.usersLiked.some(like => like._id == req.user?._id);

    res.render('theater/theater-details', { ...theaterPlays, isOwner, isLiked, titlePage: 'Details Page' });
});

router.get('/edit/:theaterId', isAuth, async (req, res) => {

    const theaterPlays = await theaterServices.getOne(req.params.theaterId).lean();

    res.render('theater/edit-theater', { ...theaterPlays, titlePage: 'Edit Page' })
});

router.post('/edit/:theaterId', isAuth, async (req, res) => {

    const theaterPlays = req.body;
    const isPublicBoolean = theaterPlays.isPublic === 'on' ? true : false;

    theaterPlays.isPublic = isPublicBoolean;

    try {
        // await theaterServices.update2(req.params.theaterId, theaterPlays);
        await theaterServices.update(req.params.theaterId, theaterPlays);

        res.redirect(`/theater/details/${req.params.theaterId}`);
    } catch (error) {
        res.render('theater/edit-theater', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/delete/:theaterId', isAuth, async (req, res) => {

    await theaterServices.delete(req.params.theaterId);
    res.redirect('/');
});

router.get('/like/:theaterId', isAuth, async (req, res) => {

    const theaterPlays = await theaterServices.getOne(req.params.theaterId);
    const user = await userServices.getOne(req.user._id);

    theaterPlays.usersLiked.push(req.user._id);
    user.likedPlays.push(theaterPlays);

    await theaterPlays.save();
    await user.save();

    res.redirect(`/theater/details/${req.params.theaterId}`);
});

router.get('/sort-by-date', isAuth, async (req, res) => {

    const allPlays = await theaterServices.sortByDate().lean();

    res.render('home', { allPlays, titlePage: 'Home Page' });

});

router.get('/sort-by-like', isAuth, async (req, res) => {

    const allPlays = await theaterServices.getAll().lean();
    allPlays.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
   
    res.render('home', { allPlays, titlePage: 'Home Page' });
});

module.exports = router;