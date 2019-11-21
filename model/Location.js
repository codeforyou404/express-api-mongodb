var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    latitude: String,
    longitude: String 
});
mongoose.model('locations', UserSchema);
module.exports = mongoose.model('locations');