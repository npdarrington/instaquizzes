import React from 'react';

import { SavedQuizGamesModel } from '../utils/utils'

import './SavedQuizDetails.scss';

interface IProps {
	savedQuiz: SavedQuizGamesModel
}

const SavedQuizDetails: React.FC<IProps> = ({ savedQuiz }) => {
	return <h1>SavedQuizDetails Component {savedQuiz.id}</h1>;
};

export default SavedQuizDetails;
