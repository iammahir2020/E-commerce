var mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
 name: String,
 description: String,
 photo: String,
 price: Number
})
var Product = mongoose.model('Product', ProductSchema)
module.exports = Product
