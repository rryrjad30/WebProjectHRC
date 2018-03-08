var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  email: {type : String, required : true, unique : true},
  gender: String,
  province: String,
  location: String,
  dob: String,
  hire_allow: String,
  phone_number: String,
  password: String,
  notification : [{sender: String, message: String, date: {type: Date, default:Date.now}}],
  image : String,
  address : String,
  quickhire: String,
})


userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);


module.exports = User;
