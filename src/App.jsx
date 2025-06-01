import React, { useState, useEffect } from 'react';
import IntroPage from './pages/IntroPage';
import BodyPage from './pages/BodyPage';
import ResultPage from './pages/ResultPage';
import questions from './data/questions.json';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
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

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!username) {
    return <IntroPage username={username} setUsername={setUsername} />;
  }

  if (submitted) {
    return <ResultPage questions={questions} answers={answers} name={username} />;
  }

  return (
    <BodyPage
      questions={questions}
      current={currentQuestion}
      setCurrent={setCurrentQuestion}
      answers={answers}
      onAnswer={handleAnswer}
      onSubmit={handleSubmit}
      timeLeft={timeLeft}
    />
  );
};

export default App;
