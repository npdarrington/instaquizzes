import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import SavedQuiz from './SavedQuiz';
import { SavedQuizGamesModel } from '../utils/utils';
import mockSavedQuizData from './mocksavedQuizData';

const mockSavedData: SavedQuizGamesModel = mockSavedQuizData;

describe('SavedQuiz', () => {
	test('should render a SavedQuiz on the page', () => {
		render(
			<MemoryRouter>
				<SavedQuiz savedQuiz={mockSavedData} />
			</MemoryRouter>
		);

		expect(screen.getByText('Category: All Random')).toBeInTheDocument();
		expect(screen.getByText('Question Count: 2')).toBeInTheDocument();
		expect(screen.getByText('Correct Answers: 0')).toBeInTheDocument();
		expect(screen.getByText('Incorrect Answers: 2')).toBeInTheDocument();
		expect(screen.getByText('Correct Percentage: 0.0%')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'View Full Details' })
		).toBeInTheDocument();
	});
});
