const mongoose = require('mongoose');


const User = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [6, 'Username have to be more than 6 characters'],
        maxlength: 30
    },
    password:  {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password have to be more than 6 characters']
    },
    avatar: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },

})

module.exports = mongoose.model('Users', User)