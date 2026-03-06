import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Good Job! 👍";
    if (percentage >= 40) return "Fair Effort! 💪";
    return "Keep Practicing! 📚";
  };

  return (
    <div className="result-card">
      <h2 className="result-title">Quiz Completed!</h2>
      
      <div className="score-display-large">
        <span className="score-number-large">{score}</span>
        <span className="score-total-large">/{totalQuestions}</span>
      </div>

      <p className="result-message">{getMessage()}</p>
      
      <div className="result-details">
        <p>Your Score: <strong>{percentage.toFixed(1)}%</strong></p>
        <p>Correct Answers: {score}</p>
        <p>Incorrect Answers: {totalQuestions - score}</p>
      </div>

      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;