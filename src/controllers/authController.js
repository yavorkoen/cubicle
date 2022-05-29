const router = require('express').Router();
const authService = require('../services/authService.js');
// const { createToken } = require('../services/authService.js');


const renderRegisterPage = (req, res) => {
    res.render('auth/register', { layout: 'unsigned' });
}

const register = async (req, res) => {
    let { username, password, repeatPassword } = req.body;

    try {
        await authService.register(username, password)
        res.redirect('/login');
    } catch (err) {
        res.status(400).send(err.message);
    }

}



const renderLoginPage = (req, res) => {
    res.render('auth/login', { layout: 'unsigned' });
}

const login = async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = await authService.login(username, password);
        console.log(user);
        let token = await authService.createToken(user);
        console.log(token);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message);
    }
}



router.get('/login', renderLoginPage);
router.post('/login', login)
router.get('/register', renderRegisterPage);
router.post('/register', register);

module.exports = router;