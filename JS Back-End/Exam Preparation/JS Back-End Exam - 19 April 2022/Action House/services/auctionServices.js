const Auction = require('../models/Auction');

exports.create = (auctionData) => Auction.create(auctionData);

exports.getAllAuctions = () => Auction.find();

exports.getOneAuctionDetailed = (auctionId) => Auction.findById(auctionId).populate('author').populate('bidder');

exports.getOneAuction = (auctionId) => Auction.findById(auctionId);

exports.editAuction = (auctionId, auctionData) => Auction.updateOne({ _id: auctionId }, { $set: auctionData }, { runValidators: true });

exports.delete = (auctionId) => Auction.findByIdAndDelete(auctionId);

exports.closeAuction = (userId) => Auction.find({author: userId, closed: true}).populate('bidder');