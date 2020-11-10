import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SavedQuizzes from './SavedQuizzes';

import mockSavedQuizzesData from './mockSavedQuizzesData';

describe('SavedQuizzes', () => {
	test('should display SavedQuizzes on the screen', () => {
		render(<SavedQuizzes savedGames={mockSavedQuizzesData} />);
		expect(screen.getByText('Saved Quiz 1')).toBeInTheDocument();
		expect(screen.getByText('Correct Answers: 1')).toBeInTheDocument();
		expect(screen.getByText('Incorrect Answers: 1')).toBeInTheDocument();
		expect(screen.getByText('Saved Quiz 2')).toBeInTheDocument();
		expect(screen.getByText('Correct Answers: 2')).toBeInTheDocument();
		expect(screen.getByText('Incorrect Answers: 0')).toBeInTheDocument();
	});

	test('should display a message to the user if no SavedQuizzes exist', () => {
		render(<SavedQuizzes savedGames={[]} />);
		expect(
			screen.getByText(
				'Play through a new InstaQuiz game and save it to be able to view it here'
			)
		).toBeInTheDocument();
	});
});
