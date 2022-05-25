const Accessory = require('../models/Accessory.js');


const getAll = () => Accessory.find().lean();
const getOne = (id) => Accessory.findById(id).lean();

const create = (name, imageUrl, description) => {

    const accessory = new Accessory({
        name,
        imageUrl,
        description,
    });

    return accessory.save();
}
const getRemaining = (accessoryIds) => {
    return Accessory.find({_id: {$nin: accessoryIds}}).lean();
    //return Accessory.find().where('_id').nin(accessoriesIds).lean();
}
module.exports = {
    getAll,
    getOne,
    create,
    getRemaining
}