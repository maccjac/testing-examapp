//Displays individual quiz questions with multiple-choice, boolean, or text input options.
import React from "react";

function QuestionCard({ question, index, total, userAnswer, onAnswer, onNext, onPrev, onSubmit, isLast }) {
  const renderChoices = () => {
    if (question.type === "multiple") {
      return question.choices.map((choice, i) => (
        <div key={i} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`question-${index}`}
              value={choice}
              checked={userAnswer === choice}
              onChange={() => onAnswer(index, choice)}
              className="mr-2"
            />
            {choice}
          </label>
        </div>
      ));
    } else if (question.type === "boolean") {
      return ["True", "False"].map((val, i) => (
        <div key={i} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`question-${index}`}
              value={val}
              checked={userAnswer === val}
              onChange={() => onAnswer(index, val)}
              className="mr-2"
            />
            {val}
          </label>
        </div>
      ));
    } else {
      return (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => onAnswer(index, e.target.value)}
          className="w-full p-2 border rounded"
        />
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Question {index + 1} of {total}</h2>
      <p className="mb-4">{question.question}</p>
      {renderChoices()}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
        <button onClick={onPrev} disabled={index === 0} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
          Previous
        </button>
        {isLast ? (
          <button onClick={onSubmit} className="px-4 py-2 bg-green-600 text-white rounded">
            Submit Exam
          </button>
        ) : (
          <button onClick={onNext} className="px-4 py-2 bg-red-700 text-white rounded">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
