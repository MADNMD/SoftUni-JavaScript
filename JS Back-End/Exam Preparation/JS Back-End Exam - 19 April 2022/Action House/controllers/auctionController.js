const router = require('express').Router();

const auctionServices = require('../services/auctionServices');
const { getErrorMessage } = require('../utils/errorHellper');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', async (req, res) => {

    const allAuctions = await auctionServices.getAllAuctions().lean();
  
    res.render('auction/browse', { allAuctions, sitePage: 'Catalog Page' });
});

router.get('/createAuction', isAuth, (req, res) => {

    res.render('auction/create', { sitePage: 'Create Auction Page' });
});

router.post('/createAuction', isAuth, async (req, res) => {

    const auctionData = { ...req.body, author: req.user._id };

    try {
        await auctionServices.create(auctionData);
        res.redirect('/auction/catalog')
    } catch (error) {
        return res.render('auction/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/details/:auctionId', async (req, res) => {

    const auction = await auctionServices.getOneAuctionDetailed(req.params.auctionId).lean();
    const isOwner = auction.author._id == req.user?._id;

    const bidder = auction.bidder.pop();
    const canBid = !isOwner && req.user?._id != auction.bidder?._id;

    res.render('auction/details-owner', { ...auction, bidder, canBid, isOwner, sitePage: 'Details Page' });
});

router.get('/edit/:auctionId', isAuth, async (req, res) => {

    const auction = await auctionServices.getOneAuction(req.params.auctionId).lean();

    if (auction.author != req.user._id) {
        res.redirect('/404');
    }

    res.render('auction/edit', { ...auction, sitePage: 'Edit Page' })
});

router.post('/edit/:auctionId', isAuth, async (req, res) => {

    const auction = await auctionServices.getOneAuction(req.params.auctionId).lean();

    if (auction.author != req.user._id) {
        res.redirect('/404');
    }

    const editAuction = req.body;

    try {
        await auctionServices.editAuction(req.params.auctionId, editAuction);
        res.redirect(`/auction/details/${req.params.auctionId}`);
    } catch (error) {
        return res.render('auction/edit', { ...editAuction, error: getErrorMessage(error) });
    }
});

router.get('/delete/:auctionId', isAuth, async (req, res) => {

    const auction = await auctionServices.getOneAuction(req.params.auctionId).lean();

    if (auction.author != req.user._id) {
        res.redirect('/404');
    }

    await auctionServices.delete(req.params.auctionId);
    res.redirect('/')
});

router.post('/bid/:auctionId', isAuth, async (req, res) => {

    const auction = await auctionServices.getOneAuction(req.params.auctionId);
    const newPrice = Number(req.body.bidAmount);

    if (Number(auction.price) > newPrice) {
        return res.redirect(`/auction/details/${req.params.auctionId}`);
    } else {
        auction.price = newPrice;
    }

    auction.bidder.push(req.user._id);
    await auction.save();


    res.redirect(`/auction/details/${req.params.auctionId}`);
});

router.get('/close/:auctionId', isAuth, async (req, res) => {

    const auction = await auctionServices.getOneAuction(req.params.auctionId).lean();
    auction.closed = true;
    // await auction.save();
    console.log(auction)
    res.render('home/closed-auctions', { auction });
});

module.exports = router;