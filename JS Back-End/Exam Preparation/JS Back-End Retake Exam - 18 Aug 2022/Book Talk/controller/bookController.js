const router = require('express').Router();

const bookServices = require('../services/bookServices');
const { isAuth, isGuest } = require('../middleware/authMiddleware');
const { getErrorMessage } = require('../util/errorHellper');

router.get('/catalog', async (req, res) => {

    const books = await bookServices.getAll().lean();

    res.render('books/catalog', { books });
});

router.get('/create', isAuth, (req, res) => {
    res.render('books/create');
});

router.post('/create', isAuth, async (req, res) => {

    try {

        await bookServices.create({ ...req.body, owner: req.user._id });

        res.redirect('/book/catalog');

    } catch (error) {
        res.render('books/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/details/:bookId', async (req, res) => {

    const book = await bookServices.getOneDetailed(req.params.bookId).lean();
    const isAuthor = book.owner._id == req.user?._id;
    const isWish = book.wishingList.some(x => x._id == req.user?._id);

    res.render('books/details', { ...book, isAuthor, isWish });
});

router.get('/edit/:bookId', isAuth, async (req, res) => {

    const book = await bookServices.getOne(req.params.bookId).lean();

    res.render('books/edit', { ...book });
});

router.post('/edit/:bookId', isAuth, async (req, res) => {

    try {
        await bookServices.updateBook(req.params.bookId, req.body);

        res.redirect(`/book/details/${req.params.bookId}`);
    } catch (error) {
        res.render('books/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/delete/:bookId', isAuth, async (req, res) => {

    await bookServices.deleteBook(req.params.bookId);

    res.redirect('/book/catalog');
});

router.get('/wish/:bookId', isAuth, async(req, res) => {

    const book = await bookServices.getOne(req.params.bookId);
    
    book.wishingList.push(req.user._id);

    await book.save();

    res.redirect(`/book/details/${req.params.bookId}`);
});

module.exports = router;