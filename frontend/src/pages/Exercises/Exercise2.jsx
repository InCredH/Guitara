import React, { useState } from 'react';
import "./Exercise.css";

function Exercise2() {

    const state = [
		{chord: 'F#'},
		{chord: 'B'},
		{chord: 'C'},
		{chord: 'D'},
		{chord: 'E'},
		{chord: 'F'},
		{chord: 'G'},
		{chord: 'Am'},
	  ];
      
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    return (
        <div className = 'Exercise-app-wrapper'>
            <div className='Exercise-app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}/4</span>
                            </div>
                            <div className='question-text'>Which Chord is this?</div>
							<div className = 'Exercise-image'>
								<ins className="scales_chords_api" chord= {state[0]} instrument="guitar" output="image"></ins>
							</div>
                        </div>
						
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
	);
}

export default Exercise2;