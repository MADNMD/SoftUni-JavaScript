const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const publicationServices = require('../services/publicationsServices');
const userServices = require('../services/userServices');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/', async (req, res) => {

    const publications = await publicationServices.getAll().lean();// с lean()  ми връща данни те а без целия документ, може да се ползва и в service;
    // console.log(publications);

    res.render('publication', { publications });// в случея файла се казва index и се счита за главния файл в папката и директно го намира.Ако се казва по друг начин ще трябва името на папката / и името на файла;
});

router.get('/:publicationId/details', async (req, res) => {
    console.log(req)
    const publication = await publicationServices.getOneDetailed(req.params.publicationId).lean();
    const isAuthor = publication.author._id == req.user?._id; //текущия user който е логнат в момнета(req.user._id) равен ли е на автора на публикацията(publication.author._id);
    // Задължително с два пъти == защото publication.author._id връща ID-то сън new ObjectId от пред;    
    // Въпросителната(?) се слага ако нямаме user да не гърми а да върне undefinde; И ако няма логнат user да показва детайлите на публикацията;
    const isShared = publication.usersShared.some(pub => pub._id == req.user._id); // проверяваме дали текущия потребител е шервал публикацията като подаваме id-то;


    res.render('publication/details', { publication, isAuthor, isShared });
});

// router.use(isAuth);// така казваме всички actions по надолу да използват isAuth(което е дали потребителя е логнат);Хубаво е да се използва за целия файл да не е чстично!

router.get('/:publicationId/edit', isAuth, async (req, res, next) => {

    const publication = await publicationServices.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 }); //ще извика глобалние errorHandlerMiddware
    }

    res.render('publication/edit', { ...publication });
});

router.post('/:publicationId/edit', isAuth, async (req, res) => {

    const publication = await publicationServices.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 }); //ще извика глобалние errorHandlerMiddware
    }

    try {
        await publicationServices.update(req.params.publicationId, req.body);

        res.redirect(`/publications/${req.params.publicationId}/details`);
    } catch (error) {
        res.render('publication/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:publicationId/delete', isAuth, async (req, res) => {

    const publication = await publicationServices.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 }); //ще извика глобалние errorHandlerMiddware
    }

    await publicationServices.delete(req.params.publicationId);

    res.redirect('/publications');


});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async (req, res) => {

    const publicationData = { ...req.body, author: req.user._id };// тук правим релацията и казваме че логнатия user e създателя да публикацията;
   
    try {

        const publication = await publicationServices.create(publicationData);
        await userServices.addPublication(req.user._id, publication._id);// тук взимаме и показваме публикациите на текущия потребител;

        res.redirect('/publications');

    } catch (error) {
        res.render('publication/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:publicationId/share', isAuth, async (req, res) => {

    const publication = await publicationServices.getOne(req.params.publicationId);
    const user = await userServices.getOne(req.user._id);

    publication.usersShared.push(req.user._id);
    user.shares.push(publication);

    await publication.save();
    await user.save();

    res.redirect('/');
});

module.exports = router;