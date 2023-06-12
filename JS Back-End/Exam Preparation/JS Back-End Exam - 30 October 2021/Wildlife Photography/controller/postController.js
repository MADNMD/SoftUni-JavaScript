const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const postServices = require('../services/postServices');
const userServices = require('../services/userServices');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/create', isAuth, (req, res) => {
    res.render('post/create', { sitePage: 'Create Post Page' });
});

router.post('/create', isAuth, async (req, res) => {

    try {

        const post = await postServices.createPost({ ...req.body, author: req.user._id });
        // const user = await userServices.getOne(req.user._id);

        // user.myPost.push(post._id);
        // await user.save();

        res.redirect('/post/all-posts');
    } catch (error) {
        return res.render('post/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/all-posts', async (req, res) => {

    const allPosts = await postServices.getAllPosts().lean();

    res.render('post/all-posts', { allPosts, sitePage: 'Catalog Page' });
});

router.get('/details/:postId', async (req, res) => {

    const post = await postServices.getOneDetailed(req.params.postId).lean();
    const isAuthor = post.author._id == req.user?._id;
    const hasVote = post.votesOnPost.some(vote => vote._id == req.user?._id);
    const emailsVoted = post.votedByEmails.join(', ');

    res.render('post/details', { ...post, isAuthor, hasVote, emailsVoted, sitePage: 'Details Page' });
});

router.get('/edit/:postId', isAuth, async (req, res) => {

    const post = await postServices.getOne(req.params.postId).lean();

    res.render('post/edit', { ...post, sitePage: 'Edit Page' });
});

router.post('/edit/:postId', isAuth, async (req, res) => {

    const postEdit = req.body;

    try {

        await postServices.update(req.params.postId, postEdit);

        res.redirect(`/post/details/${req.params.postId}`);
    } catch (error) {
        return res.render('post/edit', { ...postEdit, error: getErrorMessage(error) });
    }
});

router.get('/delete/:postId', isAuth, async (req, res) => {

    await postServices.delete(req.params.postId);
    res.redirect('/post/all-posts');
});

router.get('/upVote/:postId', isAuth, async (req, res) => {

    const post = await postServices.getOne(req.params.postId);

    post.votesOnPost.push(req.user._id);
    post.votedByEmails.push(req.user.email);

    post.ratingOfPost += 1;

    await post.save();
    res.redirect(`/post/details/${req.params.postId}`);

});

router.get('/downVote/:postId', isAuth, async (req, res) => {

    const post = await postServices.getOne(req.params.postId);

    post.votesOnPost.push(req.user._id);
    post.votedByEmails.push(req.user.email);

    post.ratingOfPost -= 1;

    await post.save();
    res.redirect(`/post/details/${req.params.postId}`);
});

router.get('/my-posts', isAuth, async (req, res) => {

    const myPosts = await postServices.myPosts(req.user._id).lean();
    const user = await userServices.getOne(req.user._id);
    const userFullName = user.fullName;
    myPosts.map(post => post.author = userFullName);


    res.render('post/my-posts', { myPosts, sitePage: 'My Posts Page' });
});

module.exports = router;