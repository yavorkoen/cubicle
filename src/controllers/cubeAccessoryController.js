const router = require('express').Router({ mergeParams: true});

const getAddAccessoryPage = (req, res) => {
    console.log('accessory');
    res.render('cube/accessory/attach');
}

router.get('/add', getAddAccessoryPage);

module.exports = router;