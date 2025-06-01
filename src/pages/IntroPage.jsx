//serves as the welcome screen with quiz instructions.
import React from 'react';
import './IntroPage.css';

const IntroPage = ({ startExam }) => {
  return (
    <div className="intro-page">
      <h1>Welcome to the Exam App</h1>
      <p>Click the button below to start the exam.</p>
      <button onClick={startExam}>Start Exam</button>
    </div>
  );
};

export default IntroPage;
