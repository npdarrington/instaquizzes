import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import './SavedQuiz.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

const SavedQuiz: React.FC<IProps> = ({ savedQuiz }) => {
	const correctAnswers = (): number => {
		return savedQuiz.allAnswers.filter(question => question.correct).length;
	};
	return (
		<article className='saved-quiz-card'>
			<p className='category'>Category: All Random</p>
			<p className='question-count'>
				Question Count: {savedQuiz.allQuestions.length}
			</p>
			<p className='correct-answers'>Correct Answers: {correctAnswers()}</p>
		</article>
	);
};

export default SavedQuiz;
