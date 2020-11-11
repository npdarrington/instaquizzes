import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SavedQuizDetails from './SavedQuizDetails';
import { SavedQuizGamesModel } from '../utils/utils';
import mockSavedQuizData from '../SavedQuiz/mocksavedQuizData';

const mockData: SavedQuizGamesModel = mockSavedQuizData;

describe('SavedQuizDetails', () => {
	test('should render all quiz information that is saved in full detail', () => {
		render(
			<MemoryRouter>
				<SavedQuizDetails savedQuiz={mockData} />
			</MemoryRouter>
		);
		expect(screen.getByText('Question: 1')).toBeInTheDocument();
		expect(screen.getByText('Your Answer: Public')).toBeInTheDocument();
		expect(screen.getByText('Question: 2')).toBeInTheDocument();
		expect(screen.getByText('Your Answer: SG553')).toBeInTheDocument();
	});
});
