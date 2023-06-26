const router = require('express').Router();

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');
const { isAuth, } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {

    const cube = req.body;

    cube.owner = req.user._id;// когато се добавя куб вече ще има кой го е създал'

    await cubeServices.create(cube);

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeServices.getOneDetails(req.params.id).lean();
    // console.log(cube.owner);
    // console.log(req.user._id);

    const isOwner = cube.owner == req.user?._id;// взимаме дали е собственик на куба за да вижда edit и delete бутоните и ги подаваме на view-то;
    // въпросителнaта е да не гърми ако няма owner и ще върнер undefined;
    //    console.log(isOnwer);
    res.render('details', { cube, isOwner });

});

router.get('/:id/attach-accessory', async (req, res) => {

    const cube = await cubeServices.getOne(req.params.id).lean();
    const accessories = await accessoryServices.getAllWithout(cube.accessory).lean();

    res.render('accessory/attach', { cube, accessories });
});

router.post('/:id/attach-accessory', async (req, res) => {

    const accessoryId = req.body.accessory;
    const cubeId = req.params.id;

    await cubeServices.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cube/details/${cubeId}`);
});

router.get('/:id/edit', isAuth, async (req, res) => {

    const cube = await cubeServices.getOne(req.params.id).lean(); //взимаме куба и го подаваме на рендера(hbs файла може да работи с данните);
    // console.log(cube);

    if (cube.owner != req.user._id) { // задължително само != защото ако е !== пред owner слага ObjectId и са резлични;
        return res.redirect('/404');
    }

    if (!cube) {
        res.redirect('/404');
    }

    res.render('cube/edit', { cube });

});

router.post('/:id/edit', async (req, res) => {

    const modifiedCube = await cubeServices.edit(req.params.id, req.body);
    // console.log(modifiedCube);
    res.redirect(`/cube/details/${modifiedCube._id}`);

});

router.get('/:id/delete', async (req, res) => {

    const cube = await cubeServices.getOne(req.params.id).lean();

    res.render('cube/delete', { cube });

});

router.post('/:id/delete', async (req, res) => {

    await cubeServices.delete(req.params.id);

    res.redirect('/');

});

module.exports = router;