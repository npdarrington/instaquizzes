import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import './SavedQuizDetails.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

const SavedQuizDetails: React.FC<IProps> = ({ savedQuiz }) => {
	const displayQuizQuestions = (quiz: any, index: number) => {
		return (
			<section className='saved-quiz-category'>
				<h3>Category: {quiz.category}</h3>
				<h3 dangerouslySetInnerHTML={{ __html: quiz.question }} />
				<h3>Available Answers: </h3>
				{quiz.answers.map((answer: any) => (
					<h4>{answer}</h4>
				))}
				<h3>Correct Answer: {quiz.correct_answer}</h3>
				<h3>Your Answer: {displayAnswers(index)}</h3>
			</section>
		);
	};
	const displayAnswers = (index: number) => {
		return savedQuiz.allAnswers[index].answer;
	};
	return (
		<section className='saved-quiz'>
			{savedQuiz.allQuestions.map((quiz, i) => {
				return (
					<article key={i} className='saved-quiz-card'>
						<h3>Question: {i + 1}</h3>
						{displayQuizQuestions(quiz, i)}
					</article>
				);
			})}
		</section>
	);
};

export default SavedQuizDetails;
