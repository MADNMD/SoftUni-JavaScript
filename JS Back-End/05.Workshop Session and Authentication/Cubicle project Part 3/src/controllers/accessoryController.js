const router = require('express').Router();
const accessoryServices = require('../services/accessoryServices');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {

    const accessory = req.body;

    await accessoryServices.create(accessory);

    res.redirect('/');
});

module.exports = router;