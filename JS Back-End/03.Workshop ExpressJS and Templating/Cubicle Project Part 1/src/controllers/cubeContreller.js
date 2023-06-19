const router = require('express').Router();
const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    const cube = req.body;

    try {

        await cubeService.save(cube);

        res.redirect('/');
    } catch (error) {
        res.status(400).send(err);
    }
});

router.get('/details/:id', (req, res) => {

    const cube = cubeService.getOne(req.params.id);

    res.render('details', { cube });

});

module.exports = router;