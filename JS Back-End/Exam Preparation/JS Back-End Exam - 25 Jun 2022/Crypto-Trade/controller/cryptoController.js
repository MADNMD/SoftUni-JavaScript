const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const cryptoServices = require('../services/cryptoServices');
const { getErrorMessages } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const allCryptoCoins = await cryptoServices.getAll().lean();

    res.render('crypto/catalog', { allCryptoCoins });
});

router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuth, async (req, res) => {

    const cryptoData = { ...req.body, owner: req.user._id };

    try {
        await cryptoServices.create(cryptoData);

        res.redirect('/trade/catalog');
    } catch (error) {
        res.render('crypto/create', { ...req.body, error: getErrorMessages(error) });
    }
});

router.get('/details/:coinId', async (req, res) => {

    const coin = await cryptoServices.getOneDetailed(req.params.coinId).lean();
    const isOwner = coin.owner._id == req.user?._id;
    const isBought = coin.buyCrypto.some(x => x._id == req.user?._id);

    res.render('crypto/details', { ...coin, isOwner, isBought });
});

router.get('/edit/:coinId', isAuth, async (req, res) => {

    const coin = await cryptoServices.getOne(req.params.coinId).lean();

    res.render('crypto/edit', { ...coin });
});

router.post('/edit/:coinId', isAuth, async (req, res) => {

    try {
        await cryptoServices.update(req.params.coinId, req.body);

        res.redirect(`/trade/details/${req.params.coinId}`);
    } catch (error) {
        res.render('crypto/edit', { ...req.body, error: getErrorMessages(error) })
    }
});

router.get('/delete/:coinId', isAuth, async (req, res) => {

    await cryptoServices.delete(req.params.coinId);
    res.redirect('/trade/catalog');
});

router.get('/buy/:coinId', isAuth, async (req, res) => {

    const coin = await cryptoServices.getOne(req.params.coinId);

    coin.buyCrypto.push(req.user._id);

    await coin.save();

    res.redirect(`/trade/details/${req.params.coinId}`);
});


module.exports = router;