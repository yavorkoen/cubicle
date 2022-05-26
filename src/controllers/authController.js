const router = require('express').Router();


const renderLoginPage = (req, res) => {
    res.render('auth/login', {layout: 'unsigned'});
}

const login = (req, res) => {
    console.log(req.body);

    res.redirect('/login');
}

const renderRegisterPage = (req, res) => {
    res.render('auth/register', {layout: 'unsigned'});
}

const register = (req, res) => {
    console.log(req.body);

    res.redirect('/register');
}

router.get('/login', renderLoginPage);
router.post('/login', login)
router.get('/register', renderRegisterPage);
router.post('/register', register);

module.exports = router;