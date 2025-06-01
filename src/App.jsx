import React, { useState, useEffect } from 'react';
import IntroPage from './pages/IntroPage';
import BodyPage from './pages/BodyPage';
import ResultPage from './pages/ResultPage';
import questions from './data/questions.json';
import { setLocalStorage, clearLocalStorage } from './utils/localStorageUtils';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    Number(localStorage.getItem('currentQuestion')) || 0
  );
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem('answers')) || {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (submitted || !username) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, username]);

  useEffect(() => {
    setLocalStorage("answers", answers);
    setLocalStorage("currentQuestion", currentQuestion);
    setLocalStorage("username", username);
  }, [answers, currentQuestion, username]);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    clearLocalStorage();
  };

  if (!username) {
    return <IntroPage username={username} setUsername={setUsername} />;
  }

  if (submitted) {
    return <ResultPage questions={questions} answers={answers} username={username} />;
  }

  return (
    <BodyPage
      questions={questions}
      currentQuestion={currentQuestion}
      setCurrentQuestion={setCurrentQuestion}
      answers={answers}
      handleAnswer={handleAnswer}
      handleSubmit={handleSubmit}
      timeLeft={timeLeft}
    />
  );
};

export default App;
