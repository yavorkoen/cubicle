const express = require('express');
const { cubes } = require('../models/Cube.js');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const home = async (req, res) => {

    const cubes = await cubeService.getAll();
    res.render('index', { cubes });
}

const about = (req, res) => {
    res.render('about');
}

const search = async (req, res) => {

    const { search, from, to } = req.query;
    let cubes = await cubeService.search(search, from, to)
    
    res.render('index', { cubes });
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search)

module.exports = router;
