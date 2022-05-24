const Cube = require('../models/Cube.js');


const getAll = () => Cube.find({}).lean();
const getOne = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficultyLevel) => {

    const cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel
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

module.exports = {
    getAll,
    getOne,
    create,
    search
}