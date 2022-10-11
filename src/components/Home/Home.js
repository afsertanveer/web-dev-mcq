import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import Quiz from '../Quiz/Quiz';
import './Home.css';
const Home = () => {
    const quizes = useLoaderData().data;
    return (
      <div className="container">
        <div className="border banner border-dark my-4 p-4">
          <div className="text-center m-2">
            <img src={banner} className="rounded img-fluid" alt="..." />
            <div className="banner-details">
              <h2 className="fw-bolder">
                Are you a web development professional?
              </h2>
              <h3 className="fw-bolder">Do you remember the basics?</h3>
              <h4 className="fw-bolder">
                if you don't, just go for an attempt to your favorable topic
              </h4>
              <h5 className="fw-bolder">Find Out How Good still you are!</h5>
            </div>
          </div>
        </div>
        <div className='row g-3'>
            {
                quizes.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
      </div>
    );
}


export default Home;
/*
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Card.Body className="card-disp d-flex justify-content-between align-items-center">
          <Card.Title>
            <h1 className="fw-bolder">{quiz.name}</h1>
          </Card.Title>
          <Card.Text>
            <h4 className="fw-bold mt-3">Total Questions: {quiz.total}</h4>
          </Card.Text>
          <Button variant="primary">
            Start <FontAwesomeIcon className='ms' icon={faArrowRight}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
*/
/*
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import Quiz from '../Quiz/Quiz';
import './Home.css';
import Quiz from './../Quiz/Quiz';
const Home = () => {
    const quizes = useLoaderData().data;
    return (
      <div className="container">
        <div className="border banner border-dark my-4 p-4">
          <div className="text-center m-2">
            <img src={banner} className="rounded img-fluid" alt="..." />
            <div className="banner-details">
              <h2 className="fw-bolder">
                Are you a web development professional?
              </h2>
              <h3 className="fw-bolder">Do you remember the basics?</h3>
              <h4 className="fw-bolder">
                if you don't, just go for an attempt to your favorable topic
              </h4>
              <h5 className="fw-bolder">Find Out How Good still you are!</h5>
            </div>
          </div>
        </div>
        <div className=''>
            {
                quizes.map(quiz=><Quiz key={quiz.id}></Quiz>)
            }
        </div>
      </div>
    );
};

export default Home;*/