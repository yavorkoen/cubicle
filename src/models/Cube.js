const database = require('../config/database.js');
const uniqid = require('uniqid');

class Cube {

    static #cubes = database;

    constructor(_id, name, description, imageUrl, difficultyLevel) {
            this._id = uniqid();
            this._id = _id;
            this.name = name;
            this.description = description;
            this.imageUrl = imageUrl;
            this.difficultyLevel = difficultyLevel;
    }
    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }


}


module.exports = Cube;