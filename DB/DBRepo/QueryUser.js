var userModel = require('../../model/User');
var apiResponse = require('../../ApiResponse/ApiResponse')
var errorMsg = require('../../Helper/Constants');
var test = require('../../ApiResponse/Test')

function QueryUser() { }

QueryUser.prototype.create = function (callback, ...doc) {
  userModel.create(doc, function (err, users) {

    callback(new apiResponse((err) ? null : (users.length == 0) ? null : users, errorMsg.ERROR_500));
  });
}

QueryUser.prototype.selectAll = function (callback) {
  userModel.find({}, function (err, users) {
    console.log("userss :  " + users)
    callback(new test().getReponsePattern((err) ? null : (users.length == 0) ? null : users, errorMsg.ERROR_500));
  });
}

QueryUser.prototype.selectById = function (id, callback) {
  userModel.findById(id, function (err, users) {
    callback(new apiResponse((err) ? null : (users.length == 0) ? null : users, errorMsg.ERROR_500));
  });
}

QueryUser.prototype.deleteById = function (id, callback) {
  userModel.findByIdAndRemove(req.params.id, function (err, users) {
    callback(new apiResponse((err) ? null : (users.length == 0) ? null : users, errorMsg.ERROR_500));
  });
}

QueryUser.prototype.updateById = function (id, callback) {
  userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, users) {
    callback(new apiResponse((err) ? null : (users.length == 0) ? null : users, errorMsg.ERROR_500));
  });
}

module.exports = QueryUser;