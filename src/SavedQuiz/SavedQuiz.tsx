import React from 'react';
import { Link } from 'react-router-dom';

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
			<Link to={`/saved/${savedQuiz.id}`}>
				<button className='saved-quiz-details'>View Full Details</button>
			</Link>
		</article>
	);
};

export default SavedQuiz;
