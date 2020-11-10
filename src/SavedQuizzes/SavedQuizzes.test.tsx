import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SavedQuizzes from './SavedQuizzes';

import mockSavedQuizzesData from './mockSavedQuizzesData';

describe('SavedQuizzes', () => {
	beforeEach(() => {
		render(<SavedQuizzes savedGames={mockSavedQuizzesData} />);
	});

	test('should display SavedQuizzes on the screen', () => {
		expect(screen.getByText('Saved Quiz 1')).toBeInTheDocument();
		expect(screen.getByText('Correct Answers: 1')).toBeInTheDocument();
		expect(screen.getByText('Incorrect Answers: 1')).toBeInTheDocument();
		expect(screen.getByText('Saved Quiz 2')).toBeInTheDocument();
		expect(screen.getByText('Correct Answers: 2')).toBeInTheDocument();
		expect(screen.getByText('Incorrect Answers: 0')).toBeInTheDocument();
	});
});
