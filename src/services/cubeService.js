const Cube = require('../models/Cube.js');


const getAll = () => Cube.cubes;
const create = (name, description, imageUrl, difficultyLevel) => {

    let cube = new Cube(name, description, imageUrl, difficultyLevel)
    Cube.add(cube);
    console.log(cube);
}


module.exports = {
    getAll,
    create,
}