const router = require('express').Router();

const gameServices = require('../services/gamesServices');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHellper');

router.get('/catalog', async (req, res) => {

    const games = await gameServices.allGame().lean();

    res.render('games', { games });

});

router.get('/create', isAuth, (req, res) => {
    res.render('games/create');
});

router.post('/create', isAuth, async (req, res) => {

    const gameData = { ...req.body, owner: req.user._id }

    try {

        const createdGame = await gameServices.createGame(gameData);

        res.redirect('/game/catalog');
    } catch (error) {
        res.render('games/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:gameId/details', async (req, res) => {

    const game = await gameServices.getOneDetailed(req.params.gameId).lean();
    const isOwner = game.owner._id == req.user?._id;
    const isBought = game.boughtBy.some(x => x._id == req.user?._id);

    res.render('games/details', { ...game, isOwner, isBought });
});

router.get('/:gameId/edit', isAuth, async (req, res, next) => {

    const game = await gameServices.getOne(req.params.gameId).lean();

    if (game.owner != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 });
    }

    res.render('games/edit', { ...game });
});

router.post('/:gameId/edit', isAuth, async (req, res) => {

    const game = await gameServices.getOne(req.params.gameId).lean();

    if (game.owner != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 });
    }

    try {

        await gameServices.update(req.params.gameId, req.body);

        res.redirect(`/game/${req.params.gameId}/details`,);
    } catch (error) {
        res.render('games/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:gameId/delete', isAuth, async (req, res) => {

    const game = await gameServices.getOne(req.params.gameId).lean();

    if (game.owner != req.user._id) {
        return next({ message: 'You are not authorized', status: 401 });
    }

    await gameServices.delete(req.params.gameId);

    res.redirect('/game/catalog');

});

router.get('/:gameId/buy', isAuth, async (req, res) => {

    const game = await gameServices.getOne(req.params.gameId);

    game.boughtBy.push(req.user._id);

   await game.save();

   res.redirect(`/game/${req.params.gameId}/details`);
});


module.exports = router;