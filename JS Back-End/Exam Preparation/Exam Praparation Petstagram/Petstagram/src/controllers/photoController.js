const router = require('express').Router();

const photoServices = require('../services/photoServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const allPhoto = await photoServices.getAll().lean();

    res.render('photo/catalog', { allPhoto, pageTitle: 'Catalog Page' });
})


router.get('/create', isAuth, (req, res) => {
    res.render('photo/create', { pageTitle: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const photoData = { ...req.body, owner: req.user._id };

    try {

        await photoServices.create(photoData);

        res.redirect('/photo/catalog');
    } catch (error) {
        return res.render('photo/create', { ...photoData, error: getErrorMessage(error) });
    }
});

router.get('/details/:photoId', async (req, res) => {

    const photo = await photoServices.getOneDetailed(req.params.photoId).populate('comments.user').lean();

    const isOwner = photo.owner._id == req.user?._id;
    // console.log(photo)
    res.render('photo/details', { ...photo, isOwner, pageTitle: 'Details Page' });
});

router.post('/comments/:photoId', async (req, res) => {

    const photoId = req.params.photoId;
    const { message } = req.body;
    const user = req.user._id;

    await photoServices.addComment(photoId, { user, message });

    res.redirect(`/photo/details/${photoId}`);
});

router.get('/edit/:photoId', isAuth, async (req, res) => {

    const photo = await photoServices.getOne(req.params.photoId).lean();

    res.render('photo/edit', { ...photo, pageTitle: 'Edit Page' });
});

router.post('/edit/:photoId', isAuth, async (req, res) => {

    const editPhoto = req.body;
    const photoId = req.params.photoId;

    try {

        await photoServices.edit(photoId, editPhoto);

        res.redirect(`/photo/details/${photoId}`);
    } catch (error) {
        return res.render('photo/edit', { ...editPhoto, error: getErrorMessage(error) });
    }
});

router.get('/delete/:photoId', isAuth, async (req, res) => {
   
    await photoServices.delete(req.params.photoId);

    res.redirect('/photo/catalog');
});

module.exports = router;