import React, { useEffect, useState } from 'react';
import Question from './question';

const Questions = ({ questions, setQuestions }) => {

    const [score, setScore] = useState(0);

    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (questions.length === 0) {
            setFinished(true);
        }
    }, [questions, score]);

    return finished ? (
        <div className="card shadow-md bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Puntaje</h2>
                <p>{score} / 5</p>
            </div>
        </div>
    )
    : (
        <div className="stack">
            {questions.map((question, index) => (
                <Question
                    key={index}
                    question={question}
                    setQuestions={setQuestions}
                    score={score}
                    setScore={setScore}
                />
            ))}
        </div>
    );
}

export default Questions;
