import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import SavedQuiz from '../SavedQuiz/SavedQuiz';

import './SavedQuizzes.scss';

interface IProps {
	savedGames: SavedQuizGamesModel[];
}

const SavedQuizzes: React.FC<IProps> = ({ savedGames }) => {
	return (
		<section className='saved-games'>
			{savedGames.length < 1 && (
				<h2>
					Play through a new InstaQuiz game and save it to be able to view it
					here
				</h2>
			)}
			{savedGames.length > 0 &&
				savedGames.map((savedGame, i) => (
					<article key={i} className='saved-games-section'>
						<h2 className='quiz-id'>Saved Quiz {i + 1} </h2>
						<SavedQuiz key={i} savedQuiz={savedGame} />
					</article>
				))}
		</section>
	);
};

export default SavedQuizzes;
