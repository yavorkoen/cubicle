const mongoose = require('mongoose');


const accessorySchema = new mongoose.Schema({
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
        type:String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value);
            },
            message: 'Invalid image url!'
        }
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;