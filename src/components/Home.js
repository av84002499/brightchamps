import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Assuming the CSS is saved in Home.css

const Home = () => {
  const navigate = useNavigate();

  const handleAddQuiz = () => {
    navigate('/addQuiz');
  };

  const handleStartQuiz = () => {
    navigate('/start');
  };

  return (
    <div className="home-container">
      <div className="home-card" onClick={handleStartQuiz}>
        <h2>Start Quiz</h2>
      </div>
      <div className="home-card" onClick={handleAddQuiz}>
        <h2>Add Quiz</h2>
      </div>
    </div>
  );
};

export default Home;
