const Accessory = require('../models/Accessory.js');

const getAll = () => Accessory.find({}).lean();
const getOne = (id) => Accessory.findById(id);

const create = (name, imageUrl, description) => {

    const accessory = new Accessory({
        name,
        imageUrl,
        description,
    });

    return accessory.save();
}

module.exports = {
    getAll,
    getOne,
    create,
}