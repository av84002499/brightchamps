import React, { useState } from 'react';
import './AddQuiz.css'; // Assuming your CSS is saved in AddQuiz.css
import { useDispatch } from 'react-redux';
import { addQuiz } from './redux/slice/quizSlice';

const AddQuiz = () => {
    const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || options.some(opt => !opt) || answer === null) {
      alert('Please fill all fields and select an answer');
      return;
    }
    const newQuiz = {
      question: question,
      options: options,
      answer: parseInt(answer + 1),
    };
    dispatch(addQuiz(newQuiz))
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer(null);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-heading">Add a New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the quiz question"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Options:</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className="form-input"
              required
            />
          ))}
        </div>

        <div className="form-group">
          <label className="form-label">Correct Answer:</label>
          <div className="radio-group">
            {options.map((option, index) => (
              <div key={index} className="radio-option">
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  checked={answer === index.toString()}
                />
                <span className="radio-label">{`Option ${index + 1}`}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button Area */}
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Add Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuiz;
