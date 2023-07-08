const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const auctionServices = require('../services/auctionServices');

router.get('/', (req, res) => {
    res.render('home', { sitePage: 'Home Page' });
});

router.get('/profile', isAuth, async (req, res) => {

    const closeAuctions = await auctionServices.closeAuction(req.user._id).lean();
    console.log(closeAuctions)
    res.render('home/closed-auctions', {closeAuctions, sitePage: 'Closed Auctions' })
});

module.exports = router;