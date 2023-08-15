const router = require('express').Router();

const tripServices = require('../services/tripServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const allTrips = await tripServices.getAll().lean();

    res.render('trip/shared-trips', { allTrips, pageTitile: 'Catalog Page' })
});

router.get('/create', isAuth, (req, res) => {
    res.render('trip/trip-create', { pageTitle: 'Create Trip Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const tripData = { ...req.body, creator: req.user._id };

    try {
        await tripServices.createTrip(tripData);

        res.redirect('/trip/catalog');
    } catch (error) {
        return res.render('trip/trip-create', { ...tripData, error: getErrorMessage(error) });
    }
});

router.get('/details/:tripId', async (req, res) => {

    const tripData = await tripServices.getOneDetailed(req.params.tripId).lean();
    const isOwner = tripData.creator._id == req.user?._id;
    const isJoined = tripData.buddies.some(join => join._id == req.user?._id);
    const tripBuddies = tripData.contactsPassengers.join(', ');
    const notAvailable = tripData.seats === 0;

    res.render('trip/trip-details', { ...tripData, isJoined, notAvailable, tripBuddies, isOwner, pageTitle: 'Details Page' });
});

router.get('/joined-trip/:tripId', isAuth, async (req, res) => {

    const joinedTrip = await tripServices.getOne(req.params.tripId);

    joinedTrip.buddies.push(req.user._id);
    joinedTrip.contactsPassengers.push(req.user.email);
    joinedTrip.seats -= 1;

    await joinedTrip.save();
    res.redirect(`/trip/details/${req.params.tripId}`);
});

router.get('/edit/:tripId', isAuth, async (req, res) => {

    const trip = await tripServices.getOne(req.params.tripId).lean();

    res.render('trip/trip-edit', { ...trip, pageTitle: 'Edit Page' });
});

router.post('/edit/:tripId', isAuth, async (req, res) => {

    const editTrip = req.body;
    const tripId = req.params.tripId;

    try {

        await tripServices.edit(tripId, editTrip);

        res.redirect(`/trip/details/${tripId}`)
    } catch (error) {
        return res.render('trip/trip-edit', { ...editTrip, error: getErrorMessage(error) });
    }
});

router.get('/delete/:tripId', isAuth, async (req, res) => {

    try {

        await tripServices.delete(req.params.tripId);

        res.redirect('/trip/catalog');
    } catch (error) {
        res.render('trip/trip-details', { error: 'Unseccessful trip deleted!' });
    }
});

module.exports = router;