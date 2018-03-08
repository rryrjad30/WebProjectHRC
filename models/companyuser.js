var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose')

var companySchema = new mongoose.Schema({
  name: String,
  email: {type : String, required : true, unique : true},
  password: String,
  province : String,
  location : String,
  address: String,
  account_name : String,
  account_number : String,
  image: String,
  phone_number: String
})


companySchema.plugin(passportLocalMongoose);
var company = mongoose.model('Company', companySchema);

module.exports = company;
