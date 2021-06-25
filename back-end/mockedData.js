// Represents a quiz
const quizzes = [
  {
    _id: 1,
    title: "Big-5 Personality",
    description: "Discover your personality based on the 10-item test",
    numberOfQuestions: 10,
  },
];

// Represents a quiz questions
const quizQuestions = [
  {
    _id: 20,
    quizId: 1,
    index: 1,
    label: "I sympathize with others’ feelings.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 22,
    quizId: 1,
    index: 1,
    label: "Am the life of the party.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 24,
    quizId: 1,
    index: 1,
    label: "Get chores done right away.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 26,
    quizId: 1,
    index: 2,
    label: "I convince people to do things my way.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 29,
    quizId: 1,
    index: 2,
    label: "I believe in thinking things through.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },

  {
    _id: 33,
    quizId: 1,
    index: 3,
    label: "I dislike changes.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 35,
    quizId: 1,
    index: 3,
    label: "I read all kinds of books.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 37,
    quizId: 1,
    index: 3,
    label: "I enjoy excitement.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },

  {
    _id: 32,
    quizId: 1,
    index: 4,
    label: "I prefer to save money rather than spend it.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 34,
    quizId: 1,
    index: 4,
    label: "I like to be reckless.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 36,
    quizId: 1,
    index: 4,
    label: "I care very little about what others say about me.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 21,
    quizId: 1,
    index: 5,
    label: "I get right to work when needed.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 23,
    quizId: 1,
    index: 5,
    label: "I often feel others are laughing at me.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 25,
    quizId: 1,
    index: 5,
    label: "I find it easy to forgive and forget.",
    quizQuestionAnswers: [15, 16, 17],
  },

  {
    _id: 38,
    quizId: 1,
    index: 6,
    label: "I have little concern for others.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 39,
    quizId: 1,
    index: 6,
    label: "It makes me feel good to do things out of revenge.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 40,
    quizId: 1,
    index: 6,
    label: "I can feel contact with a divine power.",
    quizQuestionAnswers: [15, 16, 17],
  },

  {
    _id: 30,
    quizId: 1,
    index: 7,
    label: "I was a good student back in school.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 27,
    quizId: 1,
    index: 7,
    label: "I was close to my parents in my childhood.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 133,
    quizId: 1,
    index: 8,
    label: "I feel worthless and hopeless.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 135,
    quizId: 1,
    index: 8,
    label: "I like science.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 137,
    quizId: 1,
    index: 8,
    label:
      "I believe there's only one right answer to most questions.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 41,
    quizId: 1,
    index: 9,
    label: "I can feel happy and sad at the same time.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 42,
    quizId: 1,
    index: 9,
    label: "I believe it is better to be safe than sorry.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 43,
    quizId: 1,
    index: 9,
    label: "It takes a lot to irritate me.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 28,
    quizId: 1,
    index: 10,
    label: "I wanted to run away from school when I was a kid.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 31,
    quizId: 1,
    index: 10,
    label: "I like telling jokes.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
];

// Represents possible quiz question answers
const quizQuestionAnswers = [
  {
    _id: 10,
    value: "0",
    label: "Strongly disagree",
  },
  { _id: 11, value: "1", label: "Disagree" },
  { _id: 12, value: "2", label: "Neither" },
  { _id: 13, value: "3", label: "Agree" },
  {
    _id: 14,
    value: "4",
    label: "Strongly Agree",
  },
  { _id: 15, value: "0", label: "Disagree" },
  { _id: 16, value: "1", label: "Neither" },
  { _id: 17, value: "2", label: "Agree" },
];

// Represents the relationship between score and related indexes of the quiz questions
const quizTraits = [
  { _id: 2, quizId: 1, name: 'openness', questionIndexes: [1, 5] },
  { _id: 3, quizId: 1, name: 'extraversion', questionIndexes: [2, 9] },
  { _id: 4, quizId: 1, name: 'impulsiveness', questionIndexes: [3, 8] },
  { _id: 5, quizId: 1, name: 'introversion', questionIndexes: [6, 10] },
  { _id: 6, quizId: 1, name: 'creativity', questionIndexes: [4, 7] },
];

module.exports = {
  quizzes,
  quizQuestions,
  quizQuestionAnswers,
  quizTraits
}
