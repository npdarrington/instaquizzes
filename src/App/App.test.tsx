import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { getQuizQuestions } from '../utils/apiCalls';
import { QuizQuestionModel } from '../utils/utils';
import mockQuizQuestions from './mockQuizQuestions';

import App from './App';

jest.mock('../utils/apiCalls.tsx');

describe('App', () => {
	let mockQuestions: QuizQuestionModel[];
	beforeEach(() => {
		mockQuestions = mockQuizQuestions;
	});

	test('should render instaquizzes to the screen', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText('InstaQuizzes')).toBeInTheDocument();
	});

	test('should render a button to start a new InstaQuiz', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		).toBeInTheDocument();
	});

	test('should render a question on the screen', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		const questionCategory = await waitFor(() =>
			screen.getByText('Entertainment: Video Games')
		);
		const question = screen.getByText(
			'Which of these is NOT a player class in Team Fortress 2?'
		);
		const answersBtns = screen.getAllByRole('button');
		const answerBtn1 = answersBtns[0].innerHTML;
		const answerBtn2 = answersBtns[1].innerHTML;
		const answerBtn3 = answersBtns[2].innerHTML;
		const answerBtn4 = answersBtns[3].innerHTML;
		expect(questionCategory).toBeInTheDocument();
		expect(question).toBeInTheDocument();
		expect(answerBtn1).toBe('Spy');
		expect(answerBtn2).toBe('Demoman');
		expect(answerBtn3).toBe('Pyro');
		expect(answerBtn4).toBe('Healer');
	});

	test('should allow a user to answer a question when clicking an answer button', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		const answersBtns = screen.getAllByRole('button');
		const answerBtn3 = answersBtns[3];
		userEvent.click(answerBtn3);
		expect(
			screen.getByRole('button', { name: 'Next Question' })
		).toBeInTheDocument();
	});

	test('should allow a user to go to next question when clicking next question', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		const answerBtnFirstQuestion = screen.getByRole('button', {
			name: 'Demoman',
		});
		userEvent.click(answerBtnFirstQuestion);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		const questionCategory = screen.getByText('Entertainment: Video Games');
		const question = screen.getByText(
			'Which of these levels does NOT appear in the console/PC versions of the game "Sonic Generations"?'
		);
		const answersBtns = screen.getAllByRole('button');
		const answerBtn1 = answersBtns[0].innerHTML;
		const answerBtn2 = answersBtns[1].innerHTML;
		const answerBtn3 = answersBtns[2].innerHTML;
		const answerBtn4 = answersBtns[3].innerHTML;
		expect(questionCategory).toBeInTheDocument();
		expect(question).toBeInTheDocument();
		expect(answerBtn1).toBe('City Escape');
		expect(answerBtn2).toBe('Mushroom Hill');
		expect(answerBtn3).toBe('Planet Wisp');
		expect(answerBtn4).toBe('Sky Sanctuary');
	});

	test('should show user an error message if they try to answer same question twice', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		const answerBtnFirstQuestion = screen.getByRole('button', {
			name: 'Demoman',
		});
		userEvent.click(answerBtnFirstQuestion);
		userEvent.click(answerBtnFirstQuestion);
		expect(
			screen.getByText('This question has already been answered')
		).toBeInTheDocument();
	});

	test('should show the next question button as Finish Quiz after answering last question', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Demoman',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		expect(
			screen.getByRole('button', { name: 'Finish Quiz' })
		).toBeInTheDocument();
	});

	test('should finish the quiz when Finish Quiz is clicked', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Demoman',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Finish Quiz' }));
		expect(
			screen.getByRole('button', { name: 'Start New Game' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Save Previous Game' })
		).toBeInTheDocument();
	});

	test('should save the previous quiz when Save Previous Game is clicked', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Demoman',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Finish Quiz' }));
		userEvent.click(screen.getByRole('button', { name: 'Save Previous Game' }));
		expect(
			screen.getByText('This InstaQuiz game has been saved')
		).toBeInTheDocument();
	});

	test('should restart with a new game when Start New Game is clicked', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Demoman',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Finish Quiz' }));
		userEvent.click(screen.getByRole('button', { name: 'Start New Game' }));
		await waitFor(() =>
			expect(screen.getByText('Question 1 / 2')).toBeInTheDocument()
		);
	});

	test('should tell a user that the game has ended if they attempt to answer the last question twice', async () => {
		(getQuizQuestions as jest.Mock).mockResolvedValue(mockQuestions);
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		userEvent.click(
			screen.getByRole('button', { name: 'Start a New InstaQuiz' })
		);
		await waitFor(() => screen.getByText('Entertainment: Video Games'));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Demoman',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Next Question' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		userEvent.click(screen.getByRole('button', { name: 'Finish Quiz' }));
		userEvent.click(
			screen.getByRole('button', {
				name: 'Sky Sanctuary',
			})
		);
		expect(
			screen.getByText('The game has already finished')
		).toBeInTheDocument();
	});
});
