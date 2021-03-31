// Represents a quiz
const quizzes = [
  {
    _id: 1,
    title: "Test Example 1",
    description: "Discover your personality based on the 10-item test",
    numberOfQuestions: 10,
  },
  {
    _id: 2,
    title: "Test Example 2",
    description: "Discover your personality based on the 2-item test",
    numberOfQuestions: 2,
  },
  {
    _id: 3,
    title: "Test Example 3",
    description: "Discover your personality based on the 3-item test",
    numberOfQuestions: 3,
  },
  {
    _id: 4,
    title: "Test Example 4",
    description: "Discover your personality based on the 2-item test",
    numberOfQuestions: 2,
  },
  {
    _id: 5,
    title: "Test Example 5",
    description: "Discover your personality based on the 3-item test",
    numberOfQuestions: 3,
  },
  {
    _id: 6,
    title: "Test Example 6",
    description: "Discover your personality based on the 4-item test",
    numberOfQuestions: 2,
  },

];

// Represents a quiz questions
const quizQuestions = [
  {
    _id: 200,
    quizId: 2,
    index: 1,
    label: "Classical",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 201,
    quizId: 2,
    index: 2,
    label: "Blues",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 203,
    quizId: 3,
    index: 1,
    label: "I become angry easily.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 204,
    quizId: 3,
    index: 2,
    label: "I become angry easily.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 205,
    quizId: 3,
    index: 3,
    label: "I rarely experience sudden mood changes.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 206,
    quizId: 4,
    index: 1,
    label: "I'm good at keeping my emotions under control.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 207,
    quizId: 4,
    index: 2,
    label: "My mood changes a lot.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 208,
    quizId: 5,
    index: 1,
    label: "I seldom lose my temper.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 209,
    quizId: 5,
    index: 2,
    label: "My moods go up and down easily.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 210,
    quizId: 5,
    index: 3,
    label: "I get annoyed by small issues.",
    quizQuestionAnswers: [15, 16, 17],
  },
  {
    _id: 211,
    quizId: 6,
    index: 1,
    label: "I'm not easily agitated.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 212,
    quizId: 6,
    index: 2,
    label: "I do not easily lose my composure.",
    quizQuestionAnswers: [15, 16, 17],
  },
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
    _id: 137,
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
    _id: 33,
    quizId: 1,
    index: 8,
    label: "I feel worthless and hopeless.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 35,
    quizId: 1,
    index: 8,
    label: "I like science.",
    quizQuestionAnswers: [10, 11, 12, 13, 14],
  },
  {
    _id: 37,
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
const quizTrait = [
  { quizId: 1, trait: 'openness', answers: [1, 5] },
  { quizId: 1, trait: 'extraversion', answers: [2, 9] },
  { quizId: 1, trait: 'impulsiveness', answers: [3, 8] },
  { quizId: 1, trait: 'introversion', answers: [6, 10] },
  { quizId: 1, trait: 'creativity', answers: [4, 7] },
];

const feedbacks = [
  { quizId: 1, minScore: 5, value: `HIGH: Your high score in growth mindset means that you have a down-to-earth attitude and are aware that some person's characteristics cannot be changed. You might tend to hesitate at challenges and to avoid trying new things, and you're likely sensitive to negative feedback and might lose energy when facing it. This thinking might lead you to choose tasks that you know you are good at, which is great for consistency and work stability.`},
  { quizId: 1, minScore: 0, value: `LOW: Your high score in growth mindset means that you have a down-to-earth attitude and are aware that some person's characteristics cannot be changed. You might tend to hesitate at challenges and to avoid trying new things, and you're likely sensitive to negative feedback and might lose energy when facing it. This thinking might lead you to choose tasks that you know you are good at, which is great for consistency and work stability.`},
  { quizId: 2, minScore: 3, value: `HIGH: No situation can stop you - you are always moving forward. You do not find over-thinking problems as a good strategy. Instead, after a crisis, you engage in hobbies, leisure, or work activities and forget about the past. What is the point of getting stressed if you can listen to music or watch a good movie instead?`},
  { quizId: 2, minScore: 0, value: `LOW: No situation can stop you - you are always moving forward. You do not find over-thinking problems as a good strategy. Instead, after a crisis, you engage in hobbies, leisure, or work activities and forget about the past. What is the point of getting stressed if you can listen to music or watch a good movie instead?`},
  { quizId: 3, minScore: 3, value: `HIGH: People around the middle of the scale are a good fit for both remote and office work environments. Being able to balance working alongside others, as well as working more independently remotely, is their strength. They can easily switch between contexts and modes of work ie. working tightly with others on a team, as well as being able to focus on getting individual work done with few interruptions.`},
  { quizId: 3, minScore: 0, value: `LOW: People around the middle of the scale are a good fit for both remote and office work environments. Being able to balance working alongside others, as well as working more independently remotely, is their strength. They can easily switch between contexts and modes of work ie. working tightly with others on a team, as well as being able to focus on getting individual work done with few interruptions.`},
  { quizId: 4, minScore: 3, value: `HIGH: The Intense and Rebellious dimension is positively related to openness to new experiences, athleticism, self-perceived intelligence, and verbal ability. Individuals who prefer music in this dimension do not appear to display signs of neuroticism or disagreeableness. It displays moderately complex structure and intense negative emotions.`},
  { quizId: 4, minScore: 0, value: `LOW: The Intense and Rebellious dimension is positively related to openness to new experiences, athleticism, self-perceived intelligence, and verbal ability. Individuals who prefer music in this dimension do not appear to display signs of neuroticism or disagreeableness. It displays moderately complex structure and intense negative emotions.`},
  { quizId: 5, minScore: 3, value: `
  HIGH: The Reflective and Complex dimension is positively related to openness to new experiences, self-perceived intelligence, verbal ability and political liberalism. It is negatively related to social dominance orientation and athleticism. It projects a broad spectrum of both positive and negative emotions that is quite complex.`},
  { quizId: 5, minScore: 0, value: `
  LOW: The Reflective and Complex dimension is positively related to openness to new experiences, self-perceived intelligence, verbal ability and political liberalism. It is negatively related to social dominance orientation and athleticism. It projects a broad spectrum of both positive and negative emotions that is quite complex.`},
  { quizId: 6, minScore: 3, value: `HIGH: The Energetic and Rhythmic dimension is positively related to extraversion, agreeableness, blirtatiousness, liberalism, selfperceived attractiveness, and athleticism, as well as negatively related to social dominance orientation and conservatism. It exhibits comparatively less positive and negative emotion, is moderately energetic, and tends to place greater emphasis on rhythm.`},
  { quizId: 6, minScore: 0, value: `LOW: The Energetic and Rhythmic dimension is positively related to extraversion, agreeableness, blirtatiousness, liberalism, selfperceived attractiveness, and athleticism, as well as negatively related to social dominance orientation and conservatism. It exhibits comparatively less positive and negative emotion, is moderately energetic, and tends to place greater emphasis on rhythm.`},
]

module.exports = {
    quizzes,
    quizQuestions,
    quizQuestionAnswers,
    quizTrait,
    feedbacks,
}
