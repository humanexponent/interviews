const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizItemSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
  },
  index: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  answerIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'QuizItemAnswer',
    },
  ],
})

module.exports = QuizItem = mongoose.model('QuizItem', QuizItemSchema)
