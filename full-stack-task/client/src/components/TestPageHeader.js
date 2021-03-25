import React from 'react';
import { Link } from 'react-router-dom';


function TestPageHeader ({ quizData }) {

  return (
    <div className='row justify-content-between'>
      <div className='col-2'>
        <Link to='/'>
          Back
        </Link>
      </div>
      <div className='col-8'>
        <h2>
          {quizData.title}
        </h2>
      </div>
      <div className='col-2' />
    </div>
  );
}

export default TestPageHeader;
