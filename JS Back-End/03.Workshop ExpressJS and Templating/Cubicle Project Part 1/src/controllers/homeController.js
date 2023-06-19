const router = require('express').Router();
const cubeService = require('../services/cubeService');

router.get('/', (req, res) => {

    let { search, from, to } = req.query;

    const cubes = cubeService.getAll(search, Number(from), Number(to));
    // const cubes = cubeService.getAll();

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;