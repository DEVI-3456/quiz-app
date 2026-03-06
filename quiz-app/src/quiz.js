import React from 'react';

const Quiz = ({ questions, currentQuestion, handleAnswerClick, selectedAnswer }) => {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getButtonClass = (option) => {
    if (!selectedAnswer) return 'answer-btn';
    if (option === question.answer) return 'answer-btn correct';
    if (option === selectedAnswer && option !== question.answer) return 'answer-btn wrong';
    return 'answer-btn disabled';
  };

  return (
    <div className="quiz-card">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="question-header">
        <span className="question-count">
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <span className="score-display">Score: {score}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getButtonClass(option)}
            onClick={() => handleAnswerClick(option === question.answer, option)}
            disabled={selectedAnswer !== null}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;