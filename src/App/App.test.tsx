import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getQuizQuestions } from '../utils/apiCalls';
import { QuizQuestionModel } from '../utils/utils';

import App from './App';

jest.mock('../utils/apiCalls.tsx');

describe('App', () => {
	let mockQuestions: QuizQuestionModel[];
	beforeEach(() => {
		mockQuestions = [
			{
				category: 'Entertainment: Music',
				type: 'multiple',
				difficulty: 'easy',
				question:
					'In the  Rossini opera, what was the name of &#039;The Barber of Seville&#039;?',
				correct_answer: 'Figaro',
				incorrect_answers: ['Angelo', 'Fernando', 'Dave'],
				answers: ['Dave', 'Fernando', 'Figaro', 'Angelo'],
			},
			{
				category: 'Entertainment: Video Games',
				type: 'multiple',
				difficulty: 'easy',
				question:
					'Which of these is NOT a map included in the game Counter-Strike: Global Offensive?',
				correct_answer: 'Oilrig',
				incorrect_answers: ['Assault', 'Mirage', 'Cache'],
				answers: ['Assault', 'Oilrig', 'Mirage', 'Cache'],
			},
		];
	});

	test('should render instaquizzes to the screen', () => {
		render(<App />);
		expect(screen.getByText('InstaQuizzes')).toBeInTheDocument();
	});

	test('should render a button to start a new InstaQuiz', () => {
		render(<App />);
		expect(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		).toBeInTheDocument();
	});

	test('should render a question on the screen', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(<App />);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		const questionCategory = await waitFor(() =>
			screen.getByText('Entertainment: Music')
		);
		expect(questionCategory).toBeInTheDocument();
	});
});
