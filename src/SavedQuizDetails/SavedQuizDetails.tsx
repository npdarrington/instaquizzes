import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import './SavedQuizDetails.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

const SavedQuizDetails: React.FC<IProps> = ({ savedQuiz }) => {
	return (
		<section className='saved-quiz'>
			{savedQuiz.allQuestions.map((quiz, i) => {
				return (
					<article key={i} className='saved-quiz-card'>
						<h3>Question: {i + 1}</h3>
					</article>
				);
			})}
		</section>
	);
};

export default SavedQuizDetails;
