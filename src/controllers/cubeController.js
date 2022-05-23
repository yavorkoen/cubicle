const router = require('express').Router();
const cubeService = require('../services/cubeService.js');


const renderCreatePage = (req, res) => {
    res.render('create');
}

const createCube = (req, res) => {
    
    const {name, description, imageUrl, difficultyLevel} = req.body;

    cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect('/');
    
}

router.get('/create', renderCreatePage);
router.post('/create', createCube);

module.exports = router