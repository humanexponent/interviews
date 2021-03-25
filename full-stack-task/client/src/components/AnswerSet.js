import React from 'react';

function AnswerSet({ question, answers }) {

  return (
    <div className='col-12 justify-content-start answersContainer'>
      {
        question.quizQuestionAnswers.map(answerId => 
          <div key={answerId} className="form-check col-12 col-sm-auto answer">
            <input 
              className="form-check-input" 
              type="radio" 
              name={`exampleRadios${question._id}`} 
              id={`exampleRadios${answerId}`} 
              value="option1" 
            />
            <label className="form-check-label" htmlFor={`exampleRadios${answerId}`}>
              {answers.find(answer => answer._id === answerId).label}
            </label>
          </div>
        )
      }
    </div>
  );
}

export default AnswerSet;
