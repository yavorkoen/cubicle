const router = require('express').Router({ mergeParams: true});
const cubeService = require('../services/cubeService.js');


const getAddAccessoryPage = async (req, res) => {
    
    const cube = await cubeService.getOne(req.params.cubeId);
    console.log(cube);
    res.render('cube/accessory/attach', { ...cube });
}

router.get('/add', getAddAccessoryPage);

module.exports = router;