const mongoose = require("mongoose");

clothSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  numOfTimesAddedToCart: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  availableSizes:{
    type:[{size:String,numOfClothes:Number}],
    required: true,
  }
});

module.exports = mongoose.model('Clothes',clothSchema)
