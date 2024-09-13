// src/QuizCreation.js

import React, { useState } from 'react';

const QuizCreation = () => {
    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answer: '' }]);

    const handleQuizTitleChange = (e) => {
        setQuizTitle(e.target.value);
    };

    const handleQuestionChange = (index, e) => {
        const newQuestions = [...questions];
        newQuestions[index][e.target.name] = e.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, e) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = e.target.value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
    };

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleSave = () => {
        const quizData = { title: quizTitle, questions };
        localStorage.setItem('quizData', JSON.stringify(quizData));
        alert('Quiz saved to local storage!');
    };

    return (
        <div>
            <h1>Create Quiz</h1>
            <input
                type="text"
                placeholder="Quiz Title"
                value={quizTitle}
                onChange={handleQuizTitleChange}
            />
            {questions.map((q, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Question"
                        name="question"
                        value={q.question}
                        onChange={(e) => handleQuestionChange(index, e)}
                    />
                    {q.options.map((option, optIndex) => (
                        <input
                            key={optIndex}
                            type="text"
                            placeholder={`Option ${optIndex + 1}`}
                            value={option}
                            onChange={(e) => handleOptionChange(index, optIndex, e)}
                        />
                    ))}
                    <select
                        name="answer"
                        value={q.answer}
                        onChange={(e) => handleQuestionChange(index, e)}
                    >
                        <option value="">Select answer</option>
                        {q.options.map((option, optIndex) => (
                            <option key={optIndex} value={optIndex}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => removeQuestion(index)}>Remove Question</button>
                </div>
            ))}
            <button onClick={addQuestion}>Add Question</button>
            <button onClick={handleSave}>Save Quiz</button>
        </div>
    );
};

export default QuizCreation;
