const mongoose = require("mongoose");

const Image = new mongoose.Schema({
  src: String,
  createAt: {
    type: Date,
    default: Date.now()
  }
});
const Option = new mongoose.Schema({
  name: String,
  variable: []
});
const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  options: {
    type: [Option]
  },
  category: {
    type: String,
    default: "none"
  },
  image: {
    type: [Image],
    default: [
      {
        src:
          "https://www.drjainsherbals.com/wp-content/uploads/2015/12/no-product-image.jpg",
        createAt: Date.now()
      }
    ]
  },
  published: {
    type: Boolean,
    default: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Product", Product);
