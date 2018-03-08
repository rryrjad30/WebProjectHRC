const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var commentSchema = new Schema({
  article_id: String,
  comment: String,
  posted_at: {type: Date, default: Date.now()},
  person: {
    email: String,
    name: String,
    image: String
  }
})

var comment = mongoose.model("Comments", commentSchema);

module.exports = comment;
