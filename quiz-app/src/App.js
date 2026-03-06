import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz1';
import Result from './components/Result';
import questions from './data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect, option) => {
    setSelectedAnswer(option);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Wait a moment to show the answer feedback
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz Application</h1>
        
        {showResult ? (
          <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
        ) : (
          <Quiz
            questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;