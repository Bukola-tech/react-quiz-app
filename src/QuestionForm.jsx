import React, { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
    const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''], answer: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'question') {
            setNewQuestion({ ...newQuestion, question: value });
        } else if (name === 'answer') {
            setNewQuestion({ ...newQuestion, answer: value });
        } else {
            const index = parseInt(name.split('-')[1]);
            const updatedOptions = [...newQuestion.options];
            updatedOptions[index] = value;
            setNewQuestion({ ...newQuestion, options: updatedOptions });
        }
    };

    const handleAddQuestion = (e) => {
        e.preventDefault();
        onAddQuestion(newQuestion);
        setNewQuestion({ question: '', options: ['', '', '', ''], answer: '' }); // Reset form
    };

    return (
        <form onSubmit={handleAddQuestion}>
            <h3>Add a New Question</h3>
            <input
                type="text"
                name="question"
                placeholder="Question"
                value={newQuestion.question}
                onChange={handleInputChange}
                required
            />
            {newQuestion.options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    name={`option-${index}`}
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={handleInputChange}
                    required
                />
            ))}
            <input
                type="text"
                name="answer"
                placeholder="Correct Answer"
                value={newQuestion.answer}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Add Question</button>
        </form>
    );
};
export default QuestionForm;