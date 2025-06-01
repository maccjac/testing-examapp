//Handles routing between the pages (IntroPage, BodyPage, and ResultPage)
import React, { useState, useEffect } from 'react';
import IntroPage from './pages/IntroPage';
import BodyPage from './pages/BodyPage';
import ResultPage from './pages/ResultPage';
import questions from './data/questions.json';
import { setLocalStorage, clearLocalStorage } from './utils/localStorageUtils';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(() => JSON.parse(localStorage.getItem('answers')) || {});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setLocalStorage('answers', answers);
    setLocalStorage('currentQuestion', currentQuestion);
  }, [answers, currentQuestion]);

  const handleAnswer = (id, answer) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    clearLocalStorage(); // Clear localStorage when submitted
  };

  return (
    <div className="app">
      {submitted ? (
        <ResultPage questions={questions} answers={answers} />
      ) : currentQuestion === 0 ? (
        <IntroPage startExam={() => setCurrentQuestion(1)} />
      ) : (
        <BodyPage
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
          handleAnswer={handleAnswer}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
