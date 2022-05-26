const router = require('express').Router();
const authService = require('../services/authService.js');

const renderLoginPage = (req, res) => {
    res.render('auth/login', { layout: 'unsigned' });
}

const login = (req, res) => {
    console.log(req.body);

    res.redirect('/login');
}

const renderRegisterPage = (req, res) => {
    res.render('auth/register', { layout: 'unsigned' });
}

const register = async (req, res) => {
    let { username, password, repeatPassword } = req.body;

    await authService.register(username, password)
        
    res.redirect('/');
}

router.get('/login', renderLoginPage);
router.post('/login', login)
router.get('/register', renderRegisterPage);
router.post('/register', register);

module.exports = router;