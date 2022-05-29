const jwt = require('jsonwebtoken');
const {  SECRET } = require('../constants.js');



exports.jwtSign  = function (payload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function(err, token) {
            if(err) {
                reject(err);
            } else {
                resolve(token)
            }
        });
    });
    return promise;
};

exports.jwtVerify = function(token) {
    let promise = new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, function (err, decodedToken) {
            if(err) {
                reject(err)
            } else {
                resolve(decodedToken)
            }
        }) ;
    });
    return promise;
}
    


