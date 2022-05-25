const router = require('express').Router();
const cubeService = require('../services/cubeService.js');


const renderCreatePage = (req, res) => {
    res.render('create');
}

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficultyLevel);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message);
    }


}

const details = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/details', { ...cube })
}


router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/details/:cubeId', details);

module.exports = router