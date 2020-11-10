import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils';

import './SavedQuiz.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel;
}

const SavedQuiz: React.FC<IProps> = () => {
	return <h1>Saved Quiz Component</h1>;
};

export default SavedQuiz;
