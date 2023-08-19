const router = require('express').Router();

const hotelsServices = require('../services/hotelsServices');
const userServices = require('../services/userServices');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {

      const hotels = await hotelsServices.getAll().lean();
      hotels.sort((a, b) => b.freeRooms - a.freeRooms);

      res.render('home', { hotels, title: 'Home Page' });
});

router.get('/profile', isAuth, async (req, res) => {

      const user = await userServices.getOne(req.user._id).populate('bookedHotels').lean();
      // console.log(user)
      const hotelsReservation = user.bookedHotels.map(hotel => hotel.hotel).join(', ');
      console.log(hotelsReservation)

      res.render('home/profile', { ...user, hotelsReservation, title: 'Profile Page' });
});

module.exports = router;