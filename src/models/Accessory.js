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
        validation: {
            validator: function(value) {
                return /^https?:\/\//i.test(value);
            },
            message: 'Invalid image url!'
        }
    },
    difficutlyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    }
})