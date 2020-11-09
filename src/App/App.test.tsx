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
					"In the  Rossini opera, what was the name of 'The Barber of Seville'?",
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
		const question = screen.getByText(
			"In the Rossini opera, what was the name of 'The Barber of Seville'?"
		);
		const answersBtns = screen.getAllByRole('button');
		const answerBtn1 = answersBtns[1].innerHTML;
		const answerBtn2 = answersBtns[2].innerHTML;
		const answerBtn3 = answersBtns[3].innerHTML;
		const answerBtn4 = answersBtns[4].innerHTML;
		expect(questionCategory).toBeInTheDocument();
		expect(question).toBeInTheDocument();
		expect(answerBtn1).toBe('Dave');
		expect(answerBtn2).toBe('Fernando');
		expect(answerBtn3).toBe('Figaro');
		expect(answerBtn4).toBe('Angelo');
	});

	test('should allow a user to answer a question when clicking an answer button', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(<App />);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Music'));
		const answersBtns = screen.getAllByRole('button');
		const answerBtn3 = answersBtns[3];
		userEvent.click(answerBtn3);
		expect(
			screen.getByRole('button', { name: 'Next Question' })
		).toBeInTheDocument();
	});
});
