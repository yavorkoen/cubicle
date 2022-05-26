const router = require('express').Router();


const renderLoginPage = (req, res) => {
    res.render('auth/login', {layout: 'unsigned'});
}

const login = (req, res) => {
    console.log(req.body);

    res.redirect('/login');
}

router.get('/login', renderLoginPage);
router.post('/login', login)

module.exports = router;