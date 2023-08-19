const router = require('express').Router();

const { isAuth } = require('../middleware/authMiddleware');
const hotelsServices = require('../services/hotelsServices');
const userServices = require('../services/userServices');
const { getErrorMessage } = require('../util/errorHellper');

router.get('/create', isAuth, (req, res) => {
    res.render('hotel/create', { title: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {

    const hotelData = { ...req.body, owner: req.user._id };

    try {

        const createdHotel = await hotelsServices.create(hotelData);
        const user = await userServices.getOne(req.user._id);
        user.offeredHotels.push(createdHotel._id);

        await user.save();

        res.redirect('/');

    } catch (error) {
        res.render('hotel/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/details/:hotelId', isAuth, async (req, res) => {

    const hotel = await hotelsServices.getOneDetailed(req.params.hotelId).lean();
    const isOwner = hotel.owner._id == req.user?._id;
    const isBooked = hotel.usersBooked.some(x => x._id == req.user?._id);
  
    res.render('hotel/details', { ...hotel, isOwner, isBooked, title: 'Details Page' });
});

router.get('/edit/:hotelId', isAuth, async (req, res) => {

    const hotel = await hotelsServices.getOne(req.params.hotelId).lean();

    res.render('hotel/edit', { ...hotel, title: 'Edit Page' });
});

router.post('/edit/:hotelId', isAuth, async (req, res) => {

    try {
        await hotelsServices.update(req.params.hotelId, req.body);

        res.redirect(`/hotels/details/${req.params.hotelId}`);
    } catch (error) {
        res.render('hotel/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/delete/:hotelId', isAuth, async (req, res) => {

    await hotelsServices.delete(req.params.hotelId);
    res.redirect('/');
});

router.get('/book/:hotelId', isAuth, async (req, res) => {

    const hotel = await hotelsServices.getOne(req.params.hotelId);
    const user = await userServices.getOne(req.user._id);

    hotel.usersBooked.push(req.user._id);
    user.bookedHotels.push(hotel);

    await hotel.save();
    await user.save();

    res.redirect(`/hotels/details/${req.params.hotelId}`);
});

module.exports = router;