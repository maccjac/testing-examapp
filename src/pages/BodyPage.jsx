//core quiz interface, handling question progression.
import React from 'react';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import '../App.css';

const BodyPage = ({ questions, currentQuestion, setCurrentQuestion, answers, handleAnswer, handleSubmit }) => {
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  return (
    <div className="exam-container">
      <ProgressBar current={Object.keys(answers).length} total={questions.length} />
      <QuestionCard
        question={question}
        index={currentQuestion}
        total={questions.length}
        userAnswer={answers[question.id] || ''}
        onAnswer={(index, answer) => handleAnswer(question.id, answer)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSubmit={handleSubmit}
        isLast={isLast}
      />
    </div>
  );
};

export default BodyPage;
