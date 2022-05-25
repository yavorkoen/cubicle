const router = require('express').Router();
const accessoryService = require('../services/accessroyService.js');

const createAccessory = async (req, res) => {
    let { name, imageUrl, description } = req.body;
    try {
        await accessoryService.create(name, imageUrl, description);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message);
    }
}


router.get('/create', (req, res) => {
    res.render('./accessory/create')
})
router.post('/create', createAccessory);


module.exports = router;