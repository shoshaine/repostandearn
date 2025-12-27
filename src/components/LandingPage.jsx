import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-container">
      <h1 className="title">Repost</h1>
      <p className="subtitle">Reposting is easy when you earn from it.</p>
      <button className="start-button" onClick={onStart}>
        Start Earning
      </button>
    </div>
  );
};

export default LandingPage;

