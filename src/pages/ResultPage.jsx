//Displays final quiz results and feedback.

import React from 'react';
import '../App.css';

const ResultPage = ({ questions, answers }) => {
  const score = questions.reduce((total, question) => {
    const correct = question.answer.toString().toLowerCase().trim();
    const user = (answers[question.id] || '').toString().toLowerCase().trim();
    return correct === user ? total + 1 : total;
  }, 0);

  return (
    <div className="exam-container text-center">
      <h2 className="result-title">Exam Completed!</h2>
      <p className="result-score">Your Score: {score} / {questions.length}</p>
      <p className="result-thankyou">Thank you for taking the exam.</p>
    </div>
  );
};

export default ResultPage;
