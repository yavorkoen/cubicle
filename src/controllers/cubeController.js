const router = require('express').Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessroyService.js');
const cubeAccessoryController = require('../controllers/cubeAccessoryController.js');

const renderCreatePage = (req, res) => {
    res.render('cube/create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficultyLevel);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const details = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/details', { ...cube })
};

const renderEditPage = (req, res) => {
    
    res.render('cube/edit')
};




const renderDeletePage = (req, res) => {
    
    res.render('cube/delete')
};


router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/:cubeId', details);
router.use('/:cubeId/accessory', cubeAccessoryController);
router.get('/:cubeId/edit', renderEditPage);
router.get('/:cubeId/delete', renderDeletePage);

module.exports = router