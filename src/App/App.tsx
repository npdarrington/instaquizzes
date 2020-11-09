import React, { useState } from 'react';
import { QuizQuestionModel, Difficulty, UserAnswerModel } from '../utils/utils';
import { getQuizQuestions } from '../utils/apiCalls';

import Question from '../Question/Question';

import './App.scss';

const App = () => {
	const [questions, setQuestions] = useState<QuizQuestionModel[]>([]);
	const [userAnswers, setUserAnswers] = useState<UserAnswerModel[]>([]);
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

	const validateAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
		const answer = event.currentTarget.value;
		const correct = questions[currentQuestionNum - 1].correct_answer === answer;
		const answerModel = {
			question: questions[currentQuestionNum - 1].question,
			answer,
			correct,
			correctAnswer: questions[currentQuestionNum - 1].correct_answer,
		};
		setUserAnswers([...userAnswers, answerModel]);
	};

	const nextQuestion = () => {
		setCurrentQuestionNum(currentQuestionNum + 1);
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
					validateAnswer={validateAnswer}
				/>
			)}
			{userAnswers.length === currentQuestionNum &&
				userAnswers.length !== questionCount && <button>Next Question</button>}
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
