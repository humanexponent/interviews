const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberofitems: {
    type: Number,
    required: true,
  },
});

module.exports = Quiz = mongoose.model("Quiz", QuizSchema);
