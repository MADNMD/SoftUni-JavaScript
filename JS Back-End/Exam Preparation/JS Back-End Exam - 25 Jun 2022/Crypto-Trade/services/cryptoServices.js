const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find();

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getOneDetailed = (coinId) => Crypto.findById(coinId).populate('owner');

exports.getOne = (coinId) => Crypto.findById(coinId);

exports.update = (coinId, coinData) => Crypto.updateOne({ _id: coinId }, { $set: coinData }, { runValidators: true });

exports.delete = (coinId) => Crypto.findByIdAndDelete(coinId);

exports.search = (cryptoText, cryptoPayMethod) => {

    if (cryptoText) {
        return (Crypto.find({ name: { $regex: cryptoText, $options: 'i' } }).lean());
    }

    if (!cryptoText && cryptoPayMethod) {
        return (Crypto.find({ payMethod: cryptoPayMethod }).lean());
    }
}