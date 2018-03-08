const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;

var jobsSchema = new Schema({
  title : String,
  salary : Number,
  location : String,
  company_email : String,
  company_phone : String,
  job_type : String,
  description : String,
  requirement : {
    minAge : Number,
    maxAge : Number,
    experience : Number,
    education : String,
    skill : String,
    language : String,
  },
  candidate: [{name: String, email: String, status: String, phone: String}],
  posted_at : { type: Date, required: true, default: Date.now }
  // job title, salary, location, company name, job type, requirement
})


// userSchema.plugin(passportLocalMongoose);
var jobs = mongoose.model('Jobs', jobsSchema);


module.exports = jobs;
