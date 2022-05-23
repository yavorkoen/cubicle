const express = require('express');
const { cubes } = require('../models/Cube.js');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const home = (req, res) => {

    const cubes = cubeService.getAll();
    res.render('index', { cubes });
}

const about = (req, res) => {
    res.render('about');
}

const search = (req, res) => {
    
    const {search, from, to} = req.query;
    const cubes = cubeService.search(search, from, to)
    res.render('index', { cubes });
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search)

module.exports = router;
