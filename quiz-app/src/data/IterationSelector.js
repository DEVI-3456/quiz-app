import React from 'react';

const IterationSelector = ({ startIteration, completedIterations }) => {
  const iterations = [
    { id: 1, title: "General Knowledge", description: "Test your general knowledge", icon: "🧠" },
    { id: 2, title: "Science & Technology", description: "Explore the world of science", icon: "🔬" },
    { id: 3, title: "History & Geography", description: "Journey through time and places", icon: "🌍" }
  ];

  return (
    <div className="iteration-selector">
      <h2 className="selector-title">Choose Your Quiz</h2>
      <div className="iteration-cards">
        {iterations.map((iter) => (
          <div 
            key={iter.id} 
            className={`iteration-card ${completedIterations.includes(iter.id) ? 'completed' : ''}`}
            onClick={() => startIteration(iter.id)}
          >
            <div className="iteration-icon">{iter.icon}</div>
            <h3 className="iteration-title">{iter.title}</h3>
            <p className="iteration-description">{iter.description}</p>
            <div className="iteration-status">
              {completedIterations.includes(iter.id) ? (
                <span className="completed-badge">✅ Completed</span>
              ) : (
                <span className="start-badge">Start Quiz →</span>
              )}
            </div>
            <div className="question-count">5 Questions</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IterationSelector;