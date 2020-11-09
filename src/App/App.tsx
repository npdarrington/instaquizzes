import React, { useState } from 'react';
import { QuizQuestionModel, Difficulty } from '../utils/utils';
import { getQuizQuestions } from '../utils/apiCalls';

import Question from '../Question/Question';

import './App.scss';

const App = () => {
	const [questions, setQuestions] = useState<QuizQuestionModel[]>([]);
	const [userAnswers, setUserAnswers] = useState([]);
	const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
	const [questionCount, setQuestionCount] = useState(15);

	const startQuiz = async () => {
		try {
			const newQuizQuestions = await getQuizQuestions(15, Difficulty.EASY);
			setQuestions(newQuizQuestions);
		} catch (_err) {
			console.log(_err);
		}
	};

	return (
		<div className='App'>
			<h1>InstaQuizzes!</h1>
			<button onClick={startQuiz}>Click me for testing!</button>
			{questions.length < 1 && (
				<h1>Click on the button above to test a Question!</h1>
			)}
			{questions.length > 0 && (
				<Question
					category={questions[0].category}
					question={questions[0].question}
					answers={questions[0].answers}
				/>
			)}
			{currentQuestionNum === questionCount && (
				<section className='play-again-section'>
					<button>Restart</button>
					<button>Save</button>
				</section>
			)}
		</div>
	);
};

export default App;
