const Cube = require('../models/Cube.js');


const getAll = () => Cube.cubes;
const create = (name, description, imageUrl, difficultyLevel) => {

    let cube = new Cube(name, description, imageUrl, difficultyLevel)
    Cube.add(cube);
}
const getOne = (id) => {
    const cube = Cube.cubes.find(x => x._id == id);
    return cube;
}

module.exports = {
    getAll,
    getOne,
    create,
}