// src/Quiz.js
import React, { useState } from 'react';
import questions from './Questions'; 
import QuestionForm from './QuestionForm';   

const Quiz = () => {
    const [questions, setQuestions] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setIsFinished(false);
    };

    const handleAddQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };


    return (
        <div>
            {isFinished ? (
                <div>
                    <h2>Your Score: {userAnswers.filter((ans, index) => ans === questions[index].answer).length} / {questions.length}</h2>
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
             <QuestionForm onAddQuestion={handleAddQuestion} />
        </div>
    );
};

export default Quiz;