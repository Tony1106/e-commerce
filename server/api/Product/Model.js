const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    url: String
})
const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    type:{
        type: String,
        default: 'none'
    },
    category: {
        type: String,
        default:'none'
    },
    image: {
        type: [Image],
        default: [{url: 'https://www.drjainsherbals.com/wp-content/uploads/2015/12/no-product-image.jpg'}] 
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

module.exports = mongoose.model('Product', Product)