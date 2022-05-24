const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//.test(value);
            },
            message: 'Invalid image url!'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    }
});

const Cube = mongoose.model('Cube', cubeSchema);


module.exports = Cube;