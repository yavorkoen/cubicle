
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { jwtSign } = require('../utils/jwtUtils.js');
const { SECRET } = require('../constants.js');


exports.register = function (username, password, repeatPassword) {

    return User.create({ username, password, repeatPassword });

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


exports.createToken = function (user) {
    let payload = { _id: user._id, username: user.username }

    return jwtSign(payload, SECRET)       
};
