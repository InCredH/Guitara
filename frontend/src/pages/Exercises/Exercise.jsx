import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Exercise.css"

export default function Exercise() {

	const [state, setState] = useState([
		{id: 1, chord: 'F#'},
		{id: 2, chord: 'B'},
		{id: 3, chord: 'C'},
		{id: 4, chord: 'D'},
		{id: 5, chord: 'E'},
		{id: 6, chord: 'F'},
		{id: 7, chord: 'G'},
		{id: 8, chord: 'Am'},
	  ]);

	  const [options, setOptions] = useState([
		state[0],
		state[1],
		state[2],
		state[3],
	  ])

		// const opt = options[0];
	  
		

	//   console.log(options.first.chord)
	
	var [questions,setQuestion] = useState([
		{
			questionText: 'Which Guitar chord is this?',
			image: (options[0].chord),
			answerOptions: [
				{ answerText: 'F#', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
				{ answerText: 'E', isCorrect: false },
			],
		},
		{
			questionText: 'Which Guitar chord is this?',
			image:(options[1].chord),
			answerOptions: [
				{ answerText: (options[0].chord), isCorrect: true },
				{ answerText: (options[1].chord), isCorrect: false },
				{ answerText: (options[2].chord), isCorrect: false },
				{ answerText: (options[3].chord), isCorrect: false },
			],
			// chord: {},
		},
		{
			questionText: 'Which Guitar chord is this?',
			image: (options[2].chord),
			answerOptions: [
				{ answerText: (options[0].chord), isCorrect: true },
				{ answerText: (options[1].chord), isCorrect: false },
				{ answerText: (options[2].chord), isCorrect: false },
				{ answerText: (options[3].chord), isCorrect: false },
			],
			// chord: {},
		},
		{
			questionText: 'Which Guitar chord is this?',
			image: (options[3].chord),
			answerOptions: [
				{ answerText: (options[0].chord), isCorrect: true },
				{ answerText: (options[1].chord), isCorrect: false },
				{ answerText: (options[2].chord), isCorrect: false },
				{ answerText: (options[3].chord), isCorrect: false },
			],
			// chord: {},
		},
	]);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		
		// const s1 = new Set();
		// var rdm1 = Math.floor(Math.random() * 8);
		// s1.add(rdm1);
		// setOptions({
		// 	first:state[rdm]
		// });
		
		// first = state[rdm];
		// console.log(first.chord)
		// var rdm2 = Math.floor(Math.random() * 8);
		// if(s1.has(rdm2)) {
		// 	rdm2 = Math.floor(Math.random() * 8);
		// }
		// s1.add(rdm2);
		// // second = state[rdm2]
	
		// var rdm3 = Math.floor(Math.random() * 8);
		// if(s1.has(rdm3)) {
		// 	rdm3 = Math.floor(Math.random() * 8);
		// }
		// s1.add(rdm3);
		// third = state[rdm]
	
		// var rdm4 = Math.floor(Math.random() * 8);
		// if(s1.has(rdm4)) {
		// 	rdm4 = Math.floor(Math.random() * 8);
		// }
		// s1.add(rdm4);
		// // fourth = state[rdm4]
		// setOptions([
		// 	state[rdm1],
		// 	state[rdm2],
		// 	state[rdm3],
		// 	state[rdm4],
		// ]);
	};

	// useEffect(()=>{
	// 	console.log(options)
	// 	setQuestion((questions) =>{
	// 		const arr = [...questions];
	// 		for(let i=0;i<arr.length;i++){
	// 			arr[i].image = options[i].chord;
	// 			arr[i].answerOptions = [	
	// 				{ answerText: (options[0].chord), isCorrect: true },
	// 				{ answerText: (options[1].chord), isCorrect: false },
	// 				{ answerText: (options[2].chord), isCorrect: false },
	// 				{ answerText: (options[3].chord), isCorrect: false },
	// 			]
	// 		}
	// 		return arr;
	// 	} )
		// const nextQuestion = currentQuestion + 1;
		// if (nextQuestion < questions.length) {
		// 	setCurrentQuestion(nextQuestion);
		// } else {
		// 	setShowScore(true);
		// }
	// },[options]);

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
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
							<div className = 'Exercise-image'>
								{/* <ins className="scales_chords_api" chord={questions[currentQuestion].image} instrument="guitar" output="image"></ins> */}
								{questions[currentQuestion].image}
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