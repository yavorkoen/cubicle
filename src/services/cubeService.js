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

const search = (search, from, to) => {
    let foundCubes = Cube.cubes;
    if(search) {
        foundCubes = foundCubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(from > 0 && from < 7) {
        foundCubes = foundCubes.filter(x => x.difficultyLevel >= from);
    }
    if(to > 0 && to >= from && to < 7) {
        foundCubes = foundCubes.filter(x => x.difficultyLevel <= to);
        
    }
    return foundCubes;
}

module.exports = {
    getAll,
    getOne,
    create,
    search
}