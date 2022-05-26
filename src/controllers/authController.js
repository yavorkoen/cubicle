const router = require('express').Router();


const renderLoginPage = (req, res) => {
    res.render('auth/login', {layout: 'unsigned'});
}

const login = (req, res) => {
    
}

router.get('/login', renderLoginPage);
router.post('/login', login)

module.exports = router;