const User = require('../models/User');

exports.allUsers = () => User.find();