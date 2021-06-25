
const express = require("express");
const router = express.Router();

const mockedData = require("../../mockedData");

// @route GET api/tests/
// @desc Get an example test
// @access Public

router.get("/", (req, res) => {
  res.json(mockedData.quizzes);
});

// @route GET api/tests/:id
// @desc Get a single quiz with related data given quizId
// @access Public

router.get("/:id", (req, res) => {

  const exampleResponse = {
    description: "Discover your personality based on the 10-item test",
    numberOfQuestions: 10,
    quizQuestions:  [
      {
        index: 1,
        label: "I sympathize with others’ feelings.",
        quizId: 1,
        answers: [{_id: 15, value: "0", label: "Disagree"}, {_id: 16, value: "1", label: "Neither"}, {_id: 17, value: "2", label: "Agree"}]
      }
      // quizQuestions should contain 10 questions instead of 1
    ],
    title: "Big-5 Personality",
    _id: 1
  }

  /******** DELETE EXAMPLE RESPONSE & RETURN CORRECT DATA ********/

  res.json(exampleResponse);
});

// @route POST api/tests/submitAnswers/:id
// @desc Calculate results based on user answers
// @access Public

router.post("/submitAnswers/:id", (req, res) => {

  const exampleResponse = {
    results: [
      {name: "openness", score: 25},
      {name: "extraversion", score: 75},
      {name: "impulsiveness", score: 50},
      {name: "introversion", score: 0},
      {name: "creativity", score: 75}
    ]
  }

  /******** DELETE EXAMPLE RESPONSE & RETURN CORRECT DATA ********/

  res.json(exampleResponse);
});

module.exports = router
