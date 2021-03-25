import React from 'react';
import AnswerSet from './AnswerSet';

function TestQuestions({ testData }) {

  return (
    <React.Fragment>
      {
        testData.questions.map((question, id) => 
          <div key={id} className='row'>
            <div className='col-6 questionTitle'>
              <p className='titleText'>{`${id+1}. ${question.label}`}</p>
            </div>
            <AnswerSet answers={testData.answers} question={question} />
          </div>
        )
      }

    </React.Fragment>
  );
}

export default TestQuestions;
