const router = require('express').Router();

const animalServices = require('../services/animalServices');

router.get('/', async (req, res) => {

    // const allAnimal = await animalServices.getAll().lean();
    // const lastThreeAnimal = allAnimal.slice(-3);
    
    const lastThreeAnimal = await animalServices.lastThreeAnimals().lean();
    res.render('home', { lastThreeAnimal, pageTitle: 'Home Page' });
});

router.get('/search', async (req, res) => {

    const locationText = req.query.location;
    let searchingLocation = await animalServices.search(locationText);

    if (searchingLocation === undefined) {
        searchingLocation = await animalServices.getAll().lean();
    }

    res.render('home/search', { searchingLocation, pageTitle: 'Search Page' });
});

module.exports = router;