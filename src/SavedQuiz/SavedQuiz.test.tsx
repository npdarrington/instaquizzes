import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import SavedQuiz from './SavedQuiz';
import { SavedQuizGamesModel } from '../utils/utils';
import mockSavedQuizData from './mocksavedQuizData';

const mockSavedData: any = mockSavedQuizData;

describe('SavedQuiz', () => {
	test('should render a SavedQuiz on the page', () => {
		render(
			<MemoryRouter>
				<SavedQuiz savedQuiz={mockSavedData} />
			</MemoryRouter>
		);
		screen.debug();
	});
});
