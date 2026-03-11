import React, { useState } from "react";
import "./App.css";

function App() {

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answer: "Delhi"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="app">
      {currentQuestion < questions.length ? (
        <div className="quiz">
          <h2>{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <h2>Your Score: {score}</h2>
      )}
    </div>
  );
}

export default App;