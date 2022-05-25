const router = require('express').Router({ mergeParams: true});
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessroyService.js');


const getAddAccessoryPage = async (req, res) => {

    const cube = await cubeService.getOne(req.params.cubeId);
    const accessories = await accessoryService.getAll()
    
    res.render('cube/accessory/attach', { ...cube, accessories });
}
const addAccessoryToCube = async (req, res) => {
    const cubeId = req.params.cubeId;
    const accessoryId = req.body.accessory
    await cubeService.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cube/details/${cubeId}`);
}

router.get('/add', getAddAccessoryPage);
router.post('/add', addAccessoryToCube)

module.exports = router;