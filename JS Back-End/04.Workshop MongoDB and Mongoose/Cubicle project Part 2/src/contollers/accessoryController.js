const router = require('express').Router();

const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {

    res.render('accessory/create'); // това бърка в папка views от там в папка  accessory и взима create файла.
});

router.post('/create', async (req, res) => {

    await accessoryService.create(req.body);

    res.redirect('/');

})

module.exports = router;