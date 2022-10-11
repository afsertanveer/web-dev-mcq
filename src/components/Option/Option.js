import React from 'react';
import './Option.css';

const Option = ({ option, handleOnClick }) => {
  return (
    <div className="col-lg-6 col-12 mb-2 text-center ">
      <label
        className="form-check-label option w-75 p-3"
        onClick={() => handleOnClick(option)}
      >
        <input
          className="form-check-input me-2"
          type="radio"
          name="option"
          value=""
          id="flexCheckDefault"
        />
        <span>{option}</span>
      </label>
    </div>
  );
};

export default Option;