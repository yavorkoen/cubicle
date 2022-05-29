
const jwt = require('jsonwebtoken');
const { TOKEN_COOKIE, SECRET } = require('../constants.js');
const { jwtVerify } = require('../utils/jwtUtils.js')

exports.auth = (req, res, next) => {

    let token = req.cookies[TOKEN_COOKIE]

    if (!token) {
        return next();
    }
    //jwt.verify to utils and make it promise function.
    jwtVerify(token)
        .then(decodedToken => {
            req.user = decodedToken;
            next();
        });

    // jwt.verify(token, SECRET, function (err, decodedToken) {
    //     if(err) {
    //         return res.status(401).redirect('/login')
    //     }

    //     req.user = decodedToken;
    //     next();
    // });
};

