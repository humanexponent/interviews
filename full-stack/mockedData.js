
// Represents a quiz
export const quizzes = [
    { _id: 1, quizTitle: 'Test', public: true, visible: true, numberOfQuestions: 10}
]

// Represents a quiz questions
export const quizQuestions = [
    {_id: 20, _quizId: 1, index: 1, quizQuestionTitle: 'Question1-1', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 22, _quizId: 1, index: 1, quizQuestionTitle: 'Question1-2', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 24, _quizId: 1, index: 1, quizQuestionTitle: 'Question1-3', quizQuestionAsnwers: [15, 16, 17]},

    {_id: 26, _quizId: 1, index: 2, quizQuestionTitle: 'Question2-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 29, _quizId: 1, index: 2, quizQuestionTitle: 'Question2-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},

    {_id: 33, _quizId: 1, index: 3, quizQuestionTitle: 'Question3-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 35, _quizId: 1, index: 3, quizQuestionTitle: 'Question3-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 37, _quizId: 1, index: 3, quizQuestionTitle: 'Question3-3', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    
    {_id: 32, _quizId: 1, index: 4, quizQuestionTitle: 'Question4-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 34, _quizId: 1, index: 4, quizQuestionTitle: 'Question4-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 36, _quizId: 1, index: 4, quizQuestionTitle: 'Question4-3', quizQuestionAsnwers: [10, 11, 12, 13, 14]},

    {_id: 21, _quizId: 1, index: 5, quizQuestionTitle: 'Question5-1', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 23, _quizId: 1, index: 5, quizQuestionTitle: 'Question5-2', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 25, _quizId: 1, index: 5, quizQuestionTitle: 'Question5-3', quizQuestionAsnwers: [15, 16, 17]},

    {_id: 38, _quizId: 1, index: 6, quizQuestionTitle: 'Question6-1', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 39, _quizId: 1, index: 6, quizQuestionTitle: 'Question6-2', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 40, _quizId: 1, index: 6, quizQuestionTitle: 'Question6-3', quizQuestionAsnwers: [15, 16, 17]},

    {_id: 30, _quizId: 1, index: 7, quizQuestionTitle: 'Question7-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 27, _quizId: 1, index: 7, quizQuestionTitle: 'Question7-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},

    {_id: 33, _quizId: 1, index: 8, quizQuestionTitle: 'Question8-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 35, _quizId: 1, index: 8, quizQuestionTitle: 'Question8-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 37, _quizId: 1, index: 8, quizQuestionTitle: 'Question8-3', quizQuestionAsnwers: [10, 11, 12, 13, 14]},

    {_id: 41, _quizId: 1, index: 9, quizQuestionTitle: 'Question9-1', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 42, _quizId: 1, index: 9, quizQuestionTitle: 'Question9-2', quizQuestionAsnwers: [15, 16, 17]},
    {_id: 43, _quizId: 1, index: 9, quizQuestionTitle: 'Question9-3', quizQuestionAsnwers: [15, 16, 17]},

    {_id: 28, _quizId: 1, index: 10, quizQuestionTitle: 'Question10-1', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
    {_id: 31, _quizId: 1, index: 10, quizQuestionTitle: 'Question10-2', quizQuestionAsnwers: [10, 11, 12, 13, 14]},
];

// Represents possible quiz question answers
export const quizQuestionAsnwers = [
    {_id: 10, quizQuestionAsnwerKey: '1', quizQuestionAsnwerValue: 'Strongly disagree'},
    {_id: 11, quizQuestionAsnwerKey: '2', quizQuestionAsnwerValue: 'Disagree'},
    {_id: 12, quizQuestionAsnwerKey: '3', quizQuestionAsnwerValue: 'Neither'}, 
    {_id: 13, quizQuestionAsnwerKey: '4', quizQuestionAsnwerValue: 'Agree'},
    {_id: 14, quizQuestionAsnwerKey: '5', quizQuestionAsnwerValue: 'Strongly Agree'},
    {_id: 15, quizQuestionAsnwerKey: '1', quizQuestionAsnwerValue: 'Disagree'},
    {_id: 16, quizQuestionAsnwerKey: '2', quizQuestionAsnwerValue: 'Neither'}, 
    {_id: 17, quizQuestionAsnwerKey: '3', quizQuestionAsnwerValue: 'Agree'}
]

// Represents the relationship between score and related indexes of the quiz questions
export const quizTrait = [{'openness': [1, 5]}, { 'extraversion': [2, 9]}, { 'impulsiveness': [3, 8]}, {'introversion': [6, 10]}, {'creativity': [4, 7]}]
