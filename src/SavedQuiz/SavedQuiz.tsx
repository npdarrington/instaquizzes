import React from 'react';
import { Link } from 'react-router-dom';

import { SavedQuizGamesModel, displayAnswersCount } from '../utils/utils';

import './SavedQuiz.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

const SavedQuiz: React.FC<IProps> = ({ savedQuiz }) => {
	return (
		<article className='saved-quiz-card'>
			<p className='category'>Category: All Random</p>
			<p className='question-count'>
				Question Count: {savedQuiz.allQuestions.length}
			</p>
			<p className='correct-answers'>
				Correct Answers: {displayAnswersCount('correct', savedQuiz.allAnswers)}
			</p>
			<p className='incorrect-answers'>
				Incorrect Answers:{' '}
				{displayAnswersCount('incorrect', savedQuiz.allAnswers)}
			</p>
			<Link to={`/saved/${savedQuiz.id}`}>
				<button className='saved-quiz-details'>View Full Details</button>
			</Link>
		</article>
	);
};

export default SavedQuiz;
