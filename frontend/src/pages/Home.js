import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Score Evaluation Portal</h1>
      <div className="home-links">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/register" className="home-link">Register</Link>
      </div>
    </div>
  );
};

export default Home;
