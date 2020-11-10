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
					<SavedQuiz key={i} savedQuiz={savedGame} />
				))}
		</section>
	);
};

export default SavedQuizzes;
