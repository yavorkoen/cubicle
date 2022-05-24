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
    Cube.find({}).lean()
        .then((cubes) => {
            let foundCubes = cubes;
            if (search) {
                foundCubes = foundCubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
            }
            if (from > 0 && from < 7) {
                foundCubes = foundCubes.filter(x => x.difficultyLevel >= from);
            }
            if (to > 0 && to >= from && to < 7) {
                foundCubes = foundCubes.filter(x => x.difficultyLevel <= to);
                
            }
            // console.log(foundCubes)
            return foundCubes;
        })
}

module.exports = {
    getAll,
    getOne,
    create,
    search
}