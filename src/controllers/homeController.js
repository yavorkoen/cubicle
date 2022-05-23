const express = require('express');

const router = express.Router();

const home = (req, res) => {
    res.render('index');
}

const createCube = (req, res) => {
    res.render('create');
}

const about = (req, res) => {
    res.render('about');
}

router.get('/', home);
router.get('/create', createCube);
router.get('/about', about);

module.exports = router;
