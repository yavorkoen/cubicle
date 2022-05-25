const router = require('express').Router({ mergeParams: true});
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessroyService.js');


const getAddAccessoryPage = async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeService.getOne(cubeId);
    const accessories = await accessoryService.getRemaining(cube.accessories.map(x => x._id));
    console.log(accessories);
    res.render('cube/accessory/attach', { ...cube, accessories });
}
const attachAccessoryToCube = async (req, res) => {
    const cubeId = req.params.cubeId;
    const accessoryId = req.body.accessory
    await cubeService.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cube/details/${cubeId}`)
}

router.get('/add', getAddAccessoryPage);
router.post('/add', attachAccessoryToCube)

module.exports = router;