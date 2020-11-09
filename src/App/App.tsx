import React, { useState } from 'react';

import { QuizQuestionModel } from '../utils/utils';

import './App.scss';

function App() {
	const [questions, setQuestions] = useState<QuizQuestionModel[]>([]);

	return (
		<div className='App'>
			<h1>InstaQuizzes!</h1>
		</div>
	);
}

export default App;
