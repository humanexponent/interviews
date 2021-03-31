const express = require("express");
const router = express.Router();

/* Example schemas - don't worry about using them
    const Quiz = require("../../models/Quiz");
    const QuizItem = require("../../models/QuizItem");
    const QuizItemAnswer = require("../../models/QuizItemAnswer");
*/
const mockedData = require("../../mockedData");

randomArrayElement = (arr) => arr[Math.floor(Math.random()*arr.length)]

//https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

randomizeQuizQuestions = (quiz) => {
  const questionsArray = []

  for (let i = 1; i <= quiz.numberOfQuestions; i++) {
    const relatedQuestions = mockedData.quizQuestions
      .filter(question => question.quizId === quiz._id)
      .filter(question => question.index === i)

    if(relatedQuestions.length > 0) questionsArray.push(randomArrayElement(relatedQuestions))
  }

  return questionsArray
}


// @route GET api/quizzes/
// @desc Get an example test
// @access Public

router.get("/", (req, res) => {
  res.json(mockedData.quizzes);
});

// @route GET api/quizzes/:id
// @desc Get a single quiz with related data given quizId
// @access Public

router.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id)

    const desiredQuiz = mockedData.quizzes.find(quiz => quiz._id === id)
    if (!desiredQuiz) throw "Couldn't find quiz with given ID"

    const questionsArray = randomizeQuizQuestions(desiredQuiz)
    const shuffledQuestions = shuffleArray(questionsArray)
  
    res.json({
      quizData: desiredQuiz,
      questions: shuffledQuestions,
      answers: mockedData.quizQuestionAnswers
    });
  
  } 
  catch(err) {
    res.status(404).json({
      err
    });
  }
});

module.exports = router
