import React, { useState } from 'react';

import { QuizQuestionModel, Difficulty } from '../utils/utils';
import { getQuizQuestions } from '../utils/apiCalls';

import './App.scss';

function App() {
	const [questions, setQuestions] = useState<QuizQuestionModel[]>([]);

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
		</div>
	);
}

export default App;
