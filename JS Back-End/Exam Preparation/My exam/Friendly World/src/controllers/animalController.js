const router = require('express').Router();

const animalServices = require('../services/animalServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const allAnimal = await animalServices.getAll().lean();

    res.render('animal/dashboard', { allAnimal, pageTitle: 'Catalog Page' });
});

router.get('/create', isAuth, (req, res) => {
    res.render('animal/create', { pageTitle: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const animalData = { ...req.body, owner: req.user._id };

    try {

        await animalServices.create(animalData);

        res.redirect('/animal/catalog');
    } catch (error) {
        return res.render('animal/create', { ...animalData, error: getErrorMessage(error) });
    }
});

router.get('/details/:animalId', async (req, res) => {

    const animal = await animalServices.getOneDetailed(req.params.animalId).lean();
    const isOwner = animal.owner._id == req.user?._id;
    const isDonation = animal.donations.some(x => x._id == req.user?._id);

    res.render('animal/details', { ...animal, isOwner, isDonation, pageTitle: 'Details Page' });
});

router.get('/donation/:animalId', isAuth, async (req, res) => {

    const animal = await animalServices.getOne(req.params.animalId);

    animal.donations.push(req.user._id);

    await animal.save();

    res.redirect(`/animal/details/${req.params.animalId}`);
});

router.get('/edit/:animalId', isAuth, async (req, res) => {

    const animal = await animalServices.getOne(req.params.animalId).lean();

    res.render('animal/edit', { ...animal, pageTitle: 'Edit Page' });
});

router.post('/edit/:animalId', isAuth, async (req, res) => {

    const editAnimal = req.body;
    const animalId = req.params.animalId;

    try {

        await animalServices.edit(animalId, editAnimal);

        res.redirect(`/animal/details/${animalId}`);
    } catch (error) {
        return res.render('animal/edit', { ...editAnimal, error: getErrorMessage(error) });
    }
});

router.get('/delete/:animalId', isAuth, async (req, res) => {

    await animalServices.delete(req.params.animalId);

    res.redirect('/animal/catalog');
});

module.exports = router;