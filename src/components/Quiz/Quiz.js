import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
const Quiz = ({ quiz }) => {
  const navigate = useNavigate();
  const handleNavigate =()=>
  {
    navigate(`/home/${quiz.id}`);
  }
  return (
    <div className="quiz col-lg-6 col-md-12 col-sm-12">
      <Card>
        {quiz.name === "Git" ? (
          <div className="quiz-img text-center">
            <Card.Img variant="top" src={quiz.logo} className="img-fluid" />
          </div>
        ) : (
          <div className="text-center">
            <Card.Img variant="top" src={quiz.logo} className="img-fluid" />
          </div>
        )}
        <Card.Body className="card-disp d-flex justify-content-between align-items-center">
          <Card.Title>
            <h1 className="fw-bolder">{quiz.name}</h1>
          </Card.Title>
          <h4 className="fw-bolder">Total Questions: {quiz.total}</h4>
          <Button className='quiz-btn'>
              <p className='d-inline me-1' onClick={handleNavigate}>Start Quiz</p>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;