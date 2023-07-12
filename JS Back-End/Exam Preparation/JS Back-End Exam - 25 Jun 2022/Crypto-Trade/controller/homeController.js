const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const cryptoServices = require('../services/cryptoServices');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/search', isAuth, async (req, res) => {

    const cryptoText = req.query.name;
    const cryptoPayMethod = req.query.payMethod;

    let crypto = await cryptoServices.search(cryptoText, cryptoPayMethod);

    if (crypto == undefined) {
        crypto = await cryptoServices.getAll().lean();
    }

    res.render('search', { crypto });
});

module.exports = router;