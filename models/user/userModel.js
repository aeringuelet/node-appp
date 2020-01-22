var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;