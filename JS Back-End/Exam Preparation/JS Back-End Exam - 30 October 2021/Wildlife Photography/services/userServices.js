const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

// exports.addPost = async (userId, postId) => {

//     // const user = await User.findById(userId);

//     // user.myPost.push(postId)

//     // await user.save();

//     // return user;

//     return User.updateOne({ _id: userId }, { $push: { post: postId } });

// }