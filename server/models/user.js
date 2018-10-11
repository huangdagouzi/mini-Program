var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    realName: String,
    privileges: [{ type: String }]
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'name', hashField: 'password', lastLoginField: 'lastLoginTime' });
var userModel = mongoose.model('user', userSchema, 'user');

module.exports = { 'Schema': userSchema, 'Model': userModel };







