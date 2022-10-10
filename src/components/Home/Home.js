import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Home.css';
const Home = () => {
    const quizes = useLoaderData();
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
        <div>
            {
                
            }
        </div>
      </div>
    );
};

export default Home;