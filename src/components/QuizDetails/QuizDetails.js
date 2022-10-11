import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css';
const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    const {name,questions} = quizDetails;
    let serial=1;
    
    return (
      <div className="container mt-5">
        <h1 className="fw-bold text-center text-info"> Quiz of {name}</h1>
        <p className="fw-bolder text-danger">
          Important!! You can attempt a question once{" "}
        </p>
        <div className="row">
          {questions.map((questionset) => (
            <Question
              key={questionset.id}
              questionset={questionset}
              serial={serial++}
            ></Question>
          ))}
        </div>
      </div>
    );
};

export default QuizDetails;