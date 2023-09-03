const router = require('express').Router();

const realEstateServices = require('../services/realEstateServices');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {

    const allOffers = await realEstateServices.getAll().lean();
    const lastThreeOffers = allOffers.slice(-3);

    res.render('home', { lastThreeOffers, pageTitle: 'Home Page' });
});

router.get('/search', isAuth, async (req, res) => {

    const searchText = req.query.type;
    let searchingEstate = await realEstateServices.search(searchText);

    if(searchingEstate == undefined){
        searchingEstate = await realEstateServices.getAll().lean();
    }
    // const allOffers = await realEstateServices.getAll().lean();
  
    // const searchingEstate = allOffers.filter(offer => offer.type.toLowerCase() === searchText?.toLowerCase());

    // const isNotAvailable = searchingEstate.length === 0;

    // res.render('home/search', { searchingEstate, isNotAvailable, pageTitle: 'Search Page' })
    res.render('home/search', { searchingEstate, pageTitle: 'Search Page' })
});


module.exports = router;