var locationModel = require('../../model/Location');
var apiResponse = require('../../ApiResponse/ApiResponse')
var errorMsg = require('../../Helper/Constants')

function QueryLocation() {
}

QueryLocation.prototype.create = function (callback, ...doc) {
    locationModel.create(doc, function (err, location) {
        callback(new apiResponse((err) ? null : (location.length == 0) ? null : location, errorMsg.ERROR_500));
    });
}

QueryLocation.prototype.selectAll = function (callback) {
    locationModel.find({}, function (err, location) {
        callback(new apiResponse((err) ? null : (location.length == 0) ? null : location, errorMsg.ERROR_500));
    });
}

QueryLocation.prototype.selectById = function (id, callback) {
    locationModel.findById(id, function (err, location) {
        callback(new apiResponse((err) ? null : (location.length == 0) ? null : location, errorMsg.ERROR_500));
    });
}

QueryLocation.prototype.deleteById = function (id, callback) {
    locationModel.findByIdAndRemove(req.params.id, function (err, location) {
        callback(new apiResponse((err) ? null : (location.length == 0) ? null : location, errorMsg.ERROR_500));
    });
}

QueryLocation.prototype.updateById = function (id, callback) {
    locationModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, location) {
        callback(new apiResponse((err) ? null : (location.length == 0) ? null : location, errorMsg.ERROR_500));
    });
}

module.exports = QueryLocation;