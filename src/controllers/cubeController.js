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

const details = (req, res) => {
    console.log(req.params.cubeId)
    const cube = cubeService.getOne(req.params.cubeId);
    console.log('This is cube', cube);
    res.render('details', { ...cube })
}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/details/:cubeId', details);

module.exports = router