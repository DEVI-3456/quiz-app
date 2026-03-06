import React from 'react';

const Quiz1 = ({ questions, currentQuestion, handleAnswerClick, selectedAnswer, score }) => {
  const question = questions[currentQuestion];
  
  if (!question) return null;

  return (
    <div className="quiz-card">
      <div className="question-header">
        <span className="question-count">
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <span className="score-display">
          Score: {score}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`answer-btn ${
              selectedAnswer 
                ? option === question.answer 
                  ? 'correct' 
                  : option === selectedAnswer 
                    ? 'wrong' 
                    : 'disabled'
                : ''
            }`}
            onClick={() => handleAnswerClick(option === question.answer, option)}
            disabled={selectedAnswer !== null}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz1;