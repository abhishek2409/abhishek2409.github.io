import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>React Redux Bolierplate</h1>
      <h2>Get Started</h2>
      <ol>
        <li>Lorem Ipsum Dolar Amet</li>
      </ol>
      <img src={require('../../public/images/unsplash.jpg')} />
    </div>
  );
};

export default HomePage;
