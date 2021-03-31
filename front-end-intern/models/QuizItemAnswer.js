const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizItemAnswerSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
})

module.exports = QuizItemAnswer = mongoose.model(
  'QuizItemAnswer',
  QuizItemAnswerSchema,
)
