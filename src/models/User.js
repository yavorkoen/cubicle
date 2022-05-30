const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        validate: [/^[a-zA-Z0-9]+$/i, 'Username should consist of alphanumeric symbols'],
        minlength: [5, 'Username should be at least 5 characters!']
    },
    password: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9]+$/i, 'Username should consist of alphanumeric symbols'],
        minLength: [8, 'Password should be at least 8 characters']
    }
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


userSchema.static('findByUsername', function(username) {
    return this.findOne({username});
})

userSchema.method('validatePassword', function(password) {
   return bcrypt.compare(password, this.password);
})

//used to compare password and repeatPassword
userSchema.virtual('repeatPassword')
    .set(function(v) {
        if(v !== this.password) {
            throw new Error('Password mismatch!');
        }
    });

const User = mongoose.model('User', userSchema);

module.exports = User;

