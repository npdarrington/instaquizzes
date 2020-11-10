import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

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
		</article>
	);
};

export default SavedQuiz;
