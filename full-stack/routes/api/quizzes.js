
const express = require("express");
const router = express.Router();

/* Example schemas - don't worry about using them
    const Quiz = require("../../models/Quiz");
    const QuizItem = require("../../models/QuizItem");
    const QuizItemAnswer = require("../../models/QuizItemAnswer");
*/
const mockedData = require("../../mockedData");

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
  res.json({
    /* Return single test with questions and answers */
  });
});

module.exports = router
