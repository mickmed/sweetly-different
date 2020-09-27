const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: false },
    description: { type: String, required: true },
    price: { type: String, required: false }
  },
  {timestamps:true}
)

module.exports = mongoose.model('products', Product)