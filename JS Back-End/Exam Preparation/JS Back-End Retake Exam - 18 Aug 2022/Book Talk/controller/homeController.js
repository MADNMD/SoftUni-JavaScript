const router = require('express').Router();

const bookServices = require('../services/bookServices');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
   res.render('home');
});

router.get('/profile', isAuth, async (req, res) => {

   const userId = req.user._id;
   const wishedBooks = await bookServices.getMyWishBook(userId);

   res.render('home/profile', {title: 'Profile', wishedBooks});
});

module.exports = router;