const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: [5, 'Name should be at least 5 characters'],
        validate: [/^[a-zA-Z0-9 ]+$/i, 'Name should consist of alphanumeric symbols']

    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: [20, 'Description should be at least 20 characters long'],
        validate: [/^[\w\d .,!!\?"']+$/i, 'Description should consist of alphanumeric symbols']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value);
            },
            message: 'Invalid image url!'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ]
});

const Cube = mongoose.model('Cube', cubeSchema);


module.exports = Cube;