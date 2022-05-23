const express = require('express');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const home = (req, res) => {

    const cubes = cubeService.getAll();
    res.render('index', { cubes });
}

const about = (req, res) => {
    res.render('about');
}

const errorPage = (req, res) => {
    res.render('404');
}

router.get('/', home);
router.get('/about', about);
router.get('*', errorPage)

module.exports = router;
