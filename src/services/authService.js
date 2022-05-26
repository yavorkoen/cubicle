const bcrypt = require('bcrypt');
const User = require('../models/User.js');

exports.register = function (username, password) {

    return User.create({ username, password });

    //    return bcrypt.hash(password, 10)
    //         .then(hash => User.create({username, password: hash})); 
};


exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => {
            if (user) {
                return Promise.all([user.validatePassword(password), user])
            } else {
                throw { message: 'Incorrect username or password' };
            }
        })
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Incorrect username or password' };
            }
        })
}

