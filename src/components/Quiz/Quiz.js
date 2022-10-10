import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Quiz.css';
const Quiz = ({ quiz }) => {
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
        <Card.Body className="card-disp">
          <Card.Title>
            <h1 className='fw-bolder'>{quiz.name}</h1>
          </Card.Title>
          <Card.Text>
            <p className="fw-bold">Total Questions: {quiz.total}</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;