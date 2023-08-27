const router = require('express').Router();

const publicationServices = require('../services/publicationsServices');
const userServices = require('../services/userServices');

router.get('/', async (req, res) => {

    const publicationsResult = await publicationServices.getAll().lean();
   
    const publications = publicationsResult.map(pub => ({ ...pub, shareCount: pub.usersShared.length }));
    
    res.render('home', { publications });
});

router.get('/profile', async (req, res) => {

    const user = await userServices.getOne(req.user._id).populate('publications').populate('shares').lean();

    const publicationTitles = user.publications.map(pub => pub.title).join(', '); // тук взимаме и показваме публикациите на текущия потребител;
    // console.log(user);
    // console.log(publicationTitles);
    const sharesTitles = user.shares.map(pub => pub.title).join(', ');

    res.render('home/profile', { ...user, publicationTitles, sharesTitles});
});

module.exports = router;