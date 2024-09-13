import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); 
    const [timeLeft, setTimeLeft] = useState(10); 

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            changeQuestion();
        }
    }, [timeLeft]);

    useEffect(() => {
        setTimeLeft(10); 
    }, [currentQuestion]);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setShowCorrectAnswer(false); 
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleOptionClick = (index) => {
        setClickedOption(index + 1);
        if (index + 1 !== QuizData[currentQuestion].answer) {
            setShowCorrectAnswer(true); 
        } else {
            setShowCorrectAnswer(false);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setTimeLeft(10); 
        setShowCorrectAnswer(false); 
    };

    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                const isCorrect = i + 1 === QuizData[currentQuestion].answer;
                                const isClicked = clickedOption === i + 1;
                                return (
                                    <button
                                        className={`option-btn ${
                                            isClicked ? (isCorrect ? 'correct' : 'wrong') : ''
                                        } ${!isClicked && showCorrectAnswer && isCorrect ? 'correct' : ''}`}
                                        key={i}
                                        onClick={() => handleOptionClick(i)}
                                        disabled={!!clickedOption} 
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="timer">
                            Time left: {timeLeft} seconds
                        </div>
                        <input
                            type="button"
                            value="Next"
                            id="next-button"
                            onClick={changeQuestion}
                            disabled={!clickedOption} 
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
