const Game = require('../models/Game');

exports.allGame = () => Game.find();

exports.getOne = (gameId) => Game.findById(gameId);

exports.getOneDetailed = (gameId) => Game.findById(gameId).populate('owner');

exports.createGame = (gameData) => Game.create(gameData);

exports.update = (gameId, gameData) => Game.updateOne({ _id: gameId }, { $set: gameData }, { runValidators: true });

exports.delete = (gameId) => Game.deleteOne({ _id: gameId });

exports.search = (gameText, gamePlatform) => {

    if (gameText) {
        return (Game.find({ name: { $regex: gameText, $options: 'i' } }).lean());
    }

    if (!gameText && gamePlatform) {
        return (Game.find({ platform: gamePlatform }).lean());
    }
}