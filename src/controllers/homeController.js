const express = require('express');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const home = (req, res) => {

    const cubes = cubeService.getAll();
    console.log('all cubes', cubes);
    res.render('index', { cubes });
}

const about = (req, res) => {
    res.render('about');
}

router.get('/', home);
router.get('/about', about);

module.exports = router;
