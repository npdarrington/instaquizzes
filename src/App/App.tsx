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
	const [gameOver, setGameOver] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');

	const startQuiz = async () => {
		setLoading('Loading your InstaQuiz...');
		setError('');
		setGameOver(false);

		try {
			const newQuizQuestions = await getQuizQuestions(15, Difficulty.EASY);
			setQuestions(newQuizQuestions);
			setLoading('');
		} catch (_err) {
			console.log(_err);
		}
	};

	const validateAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver && userAnswers.length !== currentQuestionNum) {
			const answer = event.currentTarget.innerHTML;
			const correct =
				questions[currentQuestionNum - 1].correct_answer === answer;
			const answerModel = {
				question: questions[currentQuestionNum - 1].question,
				answer,
				correct,
				correctAnswer: questions[currentQuestionNum - 1].correct_answer,
			};
			setUserAnswers([...userAnswers, answerModel]);
			setError('');
		} else {
			gameOver
				? setError('The game has already finished!')
				: setError('This question has already been answered!');
		}
	};

	const nextQuestion = () => {
		if (userAnswers.length === questionCount) {
			setGameOver(true);
			setError('');
		} else {
			setError('');
			setCurrentQuestionNum(currentQuestionNum + 1);
		}
	};

	return (
		<div className='App'>
			<h1>InstaQuizzes!</h1>
			<button onClick={startQuiz}>Click me for testing!</button>
			{questions.length < 1 && (
				<h1>Click on the button above to test a Question!</h1>
			)}
			{error && <h1>{error}</h1>}
			{loading && <h1>{loading}</h1>}
			{questions.length > 0 && (
				<Question
					category={questions[currentQuestionNum - 1].category}
					question={questions[currentQuestionNum - 1].question}
					answers={questions[currentQuestionNum - 1].answers}
					validateAnswer={validateAnswer}
					currentQuestionNum={currentQuestionNum}
					questionCount={questionCount}
				/>
			)}
			{!gameOver && userAnswers.length === currentQuestionNum && (
				<button onClick={nextQuestion}>
					{userAnswers.length === questionCount
						? `Finish Quiz`
						: `Next Question`}
				</button>
			)}
			{gameOver && (
				<section className='play-again-section'>
					<button>Restart</button>
					<button>Save</button>
				</section>
			)}
		</div>
	);
};

export default App;
