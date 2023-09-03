const router = require('express').Router();

const realEstateServices = require('../services/realEstateServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const allOffer = await realEstateServices.getAll().lean();

    res.render('realEstate/aprt-for-recent', { allOffer, pageTitle: 'Offers Page' });
});

router.get('/create', isAuth, (req, res) => {
    res.render('realEstate/create', { pageTitle: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const estateData = { ...req.body, owner: req.user._id };

    try {

        await realEstateServices.create(estateData);

        res.redirect('/offer/catalog');
    } catch (error) {
        return res.render('realEstate/create', { ...estateData, error: getErrorMessage(error) });
    }
});

router.get('/details/:estateId', async (req, res) => {

    const estate = await realEstateServices.getOneDetailed(req.params.estateId).lean();
    const isOwner = estate.owner._id == req.user?._id;
    const isAvailable = estate.rentedHome.some(home => home._id == req.user?._id);
    const isNotAvailable = estate.availablePieces === 0;
    const nameRented = estate.rentedName.join(', ');

    res.render('realEstate/details', { ...estate, isOwner, isAvailable, isNotAvailable, nameRented, pageTitle: 'Details Page' });
});

router.get('/available/:estateId', isAuth, async (req, res) => {

    const estate = await realEstateServices.getOne(req.params.estateId);

    estate.rentedName.push(req.user.name);
    estate.rentedHome.push(req.user._id);
    estate.availablePieces -= 1;

    await estate.save();
    res.redirect(`/offer/details/${req.params.estateId}`);
});

router.get('/edit/:estateId', isAuth, async (req, res) => {

    const estate = await realEstateServices.getOne(req.params.estateId).lean();

    res.render('realEstate/edit', { ...estate, pageTitle: 'Edit Page' });
});

router.post('/edit/:estateId', isAuth, async (req, res) => {

    const editEstate = req.body;
    const estateId = req.params.estateId;

    try {

        await realEstateServices.edit(estateId, editEstate);

        res.redirect(`/offer/details/${estateId}`);
    } catch (error) {
        return res.render('realEstate/edit', { ...editEstate, error: getErrorMessage(error) });
    }
});

router.get('/delete/:estateId', isAuth, async (req, res) => {

    await realEstateServices.delete(req.params.estateId);

    res.redirect('/offer/catalog');
});

module.exports = router;