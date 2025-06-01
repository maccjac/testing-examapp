import React, { useState, useEffect } from 'react';  // React and hooks imported
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
    // Here, IntroPage should accept these props or you'll adjust accordingly
    return <IntroPage startExam={() => setUsername('User')} />;
  }

  if (submitted) {
    return <ResultPage questions={questions} answers={answers} />;
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
