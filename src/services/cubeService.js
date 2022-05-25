const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');
// const { populate } = require('../models/Cube.js');


const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficultyLevel, accessories) => {

    const cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,
        accessories,
    })

    // Cube.create(cube, function (err, cube) {
    //     if (err) {
    //         console.log(err);
    //     }
    // })
    return cube.save();
}

const search = (search, from, to) => {
    return Cube.find({}).lean()
        
}

const attachAccessory = async (cubeId, accessoryId) => {
    let cube =  await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    return cube.save();
}

module.exports = {
    getAll,
    getOne,
    create,
    search,
    attachAccessory,
}