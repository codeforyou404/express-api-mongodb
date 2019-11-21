var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    lastname: String 
});
mongoose.model('users', UserSchema);
module.exports = mongoose.model('users');