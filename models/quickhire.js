const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var quickHireSchema = new Schema({
  job_title: String,
  salary: Number,
  location: String,
  candidate_id: String,
  company_name: String,
  company_address: String,
  work_date: Date,
})

var quickhire = mongoose.model("QuickHire", quickHireSchema);

module.exports = quickhire;
