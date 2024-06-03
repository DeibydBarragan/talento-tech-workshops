import React, { useEffect, useState } from 'react';

const Question = ({ question, setQuestions, score, setScore }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [selectedAnswerIsCorrect, setSelectedAnswerIsCorrect] = useState(false);

    useEffect(() => {
        if (selectedAnswer === null) return;
        console.log(selectedAnswer);
        if (selectedAnswer -1 === question.rightOption) {
            setSelectedAnswerIsCorrect(true);
            setScore(prevScore => prevScore + 1);
            console.log(score);
        } else {
            setSelectedAnswerIsCorrect(false);
            console.log(score);
        }

    }, [selectedAnswer, question.rightOption]);

    const handleOnNext = () => {
        setSelectedAnswer(null);
        setQuestions((questions) => {
            const newQuestions = [...questions];
            newQuestions.shift();
            return newQuestions;
        });
    }

    return (
        <>
            { selectedAnswer ? (
                <div className={"card shadow-md text-primary-content h-full" + (selectedAnswerIsCorrect ? ' bg-success' : ' bg-error')}>
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title">
                            {selectedAnswerIsCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta'}
                        </h2>
                    </div>
                    <div className='card-actions justify-center pb-5'>
                        <button
                            className="btn"
                            onClick={handleOnNext}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            ) : (
                <div className="card shadow-md bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{question.title}</h2> 
                        <p>{question.description}</p>
                    </div>
                    <div className='card-actions justify-center pb-5 px-5'>
                        {question.options.map((option, index) => (
                            <button 
                                key={index}
                                className="btn"
                                onClick={() => setSelectedAnswer(index + 1)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Question;
