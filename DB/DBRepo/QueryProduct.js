var product = require('../../model/Product');
var apiResponse = require('../../ApiResponse/ApiResponse');
var errorMsg = require('../../Helper/Constants');

function QueryProduct() {
}

QueryProduct.prototype.create = function (callback, ...doc) {
    product.create(doc, function (err, prod) {
        callback(new apiResponse((err) ? null : (prod.length == 0) ? null : prod, errorMsg.ERROR_500));
    });
}

QueryProduct.prototype.selectAll = function (callback) {
    product.find({}, function (err, prod) {
        callback(new apiResponse((err) ? null : (prod.length == 0) ? null : prod, errorMsg.ERROR_500));
    });
}

QueryProduct.prototype.selectById = function (id, callback) {
    product.findById(id, function (err, prod) {
        callback(new apiResponse((err) ? null : (prod.length == 0) ? null : prod, errorMsg.ERROR_500));
    });
}

QueryProduct.prototype.deleteById = function (id, callback) {
    product.findByIdAndRemove(req.params.id, function (err, prod) {
        callback(new apiResponse((err) ? null : (prod.length == 0) ? null : prod, errorMsg.ERROR_500));
    });
}

QueryProduct.prototype.updateById = function (id, callback) {
    product.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, prod) {
        callback(new apiResponse((err) ? null : (prod.length == 0) ? null : prod, errorMsg.ERROR_500));
    });
}




module.exports = QueryProduct;