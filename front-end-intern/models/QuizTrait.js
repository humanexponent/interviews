const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizTraitSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'quiz',
    required: true,
  },
  trait: {
    type: String,
    required: true,
  },
  answers: [{ type: Number }]
})

module.exports = QuizTrait = mongoose.model('QuizTrait', QuizTraitSchema)
