const User = require('../models/User.js');
// const bcrypt = require('bcrypt');

exports.register = function(username, password) {

    return User.create({username, password});

//    return bcrypt.hash(password, 10)
//         .then(hash => User.create({username, password: hash})); 
};

