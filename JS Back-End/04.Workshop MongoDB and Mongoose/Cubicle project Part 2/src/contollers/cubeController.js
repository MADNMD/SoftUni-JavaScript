const router = require('express').Router();
const cubeServices = require('../services/cubeServices');
const accessorySercives = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    const cube = req.body;

    await cubeServices.create(cube);

    res.redirect('/');

});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeServices.getOneDetails(req.params.id).lean();
    // console.log(cube);

    res.render('details', { cube });

});

router.get('/:id/attach-accessory', async (req, res) => {
    const cube = await cubeServices.getOne(req.params.id).lean();
    // console.log(cube);
    const accessories = await accessorySercives.getAllWihtout(cube.accessory).lean();
    res.render('accessory/attach', { cube, accessories });
});

router.post('/:id/attach-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;

    await cubeServices.attachAccessory(req.params.id, accessoryId)

    res.redirect(`/cube/details/${req.params.id}`);
})

module.exports = router;