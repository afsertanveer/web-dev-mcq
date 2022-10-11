import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Option from '../Option/Option';
import ShowToast from '../ShowToast/ShowToast';
import './Question.css';

const Question = ({ questionset, serial}) => {
  const { question, options, correctAnswer } = questionset;
  const sQuestion = `Question : ${serial} ${question}`;
  const [toastShow, setToastShow] = useState(false);
  const [output, setOutput] = useState("Wrong Answer");
  const [showDiv, setShowDiv] = useState(false);

  const handleOnClick = (answer) => {
    if (answer === correctAnswer) {
      setToastShow(true);
      setOutput("Correct Answer");
    } else {
      setToastShow(true);
      setOutput("Wrong Answer");
    }
  };
  const handleEyeClick = () => {
    setShowDiv(true);
  };
  return (
    <div className="border question my-4">
      {toastShow === true && <ShowToast output={output}></ShowToast>}
      <div className="my-3 d-flex justify-content-between">
        <div
          className="single-question fw-bold  text-center"
          dangerouslySetInnerHTML={{ __html: sQuestion }}
        ></div>
        <div>
          <FontAwesomeIcon
            onClick={handleEyeClick}
            icon={faEye}
          ></FontAwesomeIcon>
        </div>
      </div>
      {toastShow ? (
        <div className="row g-3 mb-5 options">
          {options.map((option, _idx) => (
            <Option
              key={_idx}
              option={option}
              handleOnClick={handleOnClick}
            ></Option>
          ))}
        </div>
      ) : (
        <div className="row g-3 mb-5">
          {options.map((option, _idx) => (
            <Option
              key={_idx}
              option={option}
              handleOnClick={handleOnClick}
            ></Option>
          ))}
        </div>
      )}
      {showDiv && (
        <div>
          <h3 className="text-center text-danger">
            Correct answer of this question:{" "}
            <span className="text-success fw-bolder"> {correctAnswer}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Question;