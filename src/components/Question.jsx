import React from 'react';
import './Question.css';

const Question = ({ question, answer, handleAnswer }) => {
  const handleChange = (e) => {
    handleAnswer(question.id, question.type === 'true-false' ? (e.target.value === 'true') : e.target.value);
  };

  return (
    <div className="question-box">
      <h2>{question.question}</h2>
      {question.type === 'multiple-choice' && question.options.map((opt, i) => (
        <label key={i}>
          <input
            type="radio"
            name={`q${question.id}`}
            value={opt}
            checked={answer === opt}
            onChange={handleChange}
          />
          {opt}
        </label>
      ))}

      {question.type === 'true-false' && (
        <>
          <label>
            <input
              type="radio"
              name={`q${question.id}`}
              value="true"
              checked={answer === true}
              onChange={handleChange}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name={`q${question.id}`}
              value="false"
              checked={answer === false}
              onChange={handleChange}
            />
            False
          </label>
        </>
      )}

      {question.type === 'identification' && (
        <input
          type="text"
          value={answer || ''}
          onChange={(e) => handleAnswer(question.id, e.target.value)}
        />
      )}
    </div>
  );
};

export default Question;
