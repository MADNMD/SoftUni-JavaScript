const router = require('express').Router();

const photoServices = require('../services/photoServices');
const { isAuth } = require('../middlewares/authMiddleware')

router.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home Page' });
});

router.get('/profile', isAuth, async (req, res) => {

    const allPhotos = await photoServices.getAll().lean();
    const myPhotos = allPhotos.filter(photo => photo.owner._id == req.user?._id);
    console.log(myPhotos)
    res.render('home/profile', { myPhotos, pageTitle: 'Profile Page' });
})

module.exports = router;