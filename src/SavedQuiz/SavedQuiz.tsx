import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import './SavedQuiz.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

enum AnswerType {
	CORRECT = 'correct',
	INCORRECT = 'incorrect',
}

const SavedQuiz: React.FC<IProps> = ({ savedQuiz }) => {
	const displayAnswersCount = (pattern: string): number => {
		if (pattern === AnswerType.CORRECT) {
			return savedQuiz.allAnswers.filter(question => question.correct).length;
		} else {
			return savedQuiz.allAnswers.filter(question => !question.correct).length;
		}
	};

	return (
		<article className='saved-quiz-card'>
			<p className='category'>Category: All Random</p>
			<p className='question-count'>
				Question Count: {savedQuiz.allQuestions.length}
			</p>
			<p className='correct-answers'>
				Correct Answers: {displayAnswersCount('correct')}
			</p>
			<p className='incorrect-answers'>
				Incorrect Answers: {displayAnswersCount('incorrect')}
			</p>
		</article>
	);
};

export default SavedQuiz;
