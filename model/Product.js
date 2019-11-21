var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
    product_name: String,
    price: String,
    discount:String,
    favicon_url:String 
});

 mongoose.model('products', product_schema);
 module.exports = mongoose.model('products');