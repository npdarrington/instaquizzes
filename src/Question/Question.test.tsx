import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { QuizQuestionModel } from '../utils/utils';

import Question from '../Question/Question';

const mockValidateAnswer = jest.fn();

describe('Question', () => {
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
		render(
			<Question
				category={mockQuestions[0].category}
				question={mockQuestions[0].question}
				answers={mockQuestions[0].answers}
				validateAnswer={mockValidateAnswer}
				currentQuestionNum={1}
				questionCount={mockQuestions.length}
			/>
		);
	});

	test('should show the category of the question', () => {
		expect(screen.getByText('Entertainment: Music')).toBeInTheDocument();
	});

	test('should show the current question count to overall question count for game', () => {
		expect(screen.getByText('Question 1 / 2')).toBeInTheDocument();
	});

	test('should show the question', () => {
		render(
			<Question
				category={mockQuestions[1].category}
				question={mockQuestions[1].question}
				answers={mockQuestions[1].answers}
				validateAnswer={mockValidateAnswer}
				currentQuestionNum={1}
				questionCount={mockQuestions.length}
			/>
		);
		expect(
			screen.getByText(
				'Which of these is NOT a map included in the game Counter-Strike: Global Offensive?'
			)
		).toBeInTheDocument();
	});

	test('should show all available answers for a question', () => {
		const allAnswersBtns = screen.getAllByRole('button');
		const answerBtn1 = allAnswersBtns[0];
		const answerBtn2 = allAnswersBtns[1];
		const answerBtn3 = allAnswersBtns[2];
		const answerBtn4 = allAnswersBtns[3];
		expect(allAnswersBtns.length).toBe(4);
		expect(answerBtn1.innerHTML).toBe('Dave');
		expect(answerBtn2.innerHTML).toBe('Fernando');
		expect(answerBtn3.innerHTML).toBe('Figaro');
		expect(answerBtn4.innerHTML).toBe('Angelo');
	});

	test('should submit an answer when a user clicks on a button', () => {
		const allAnswersBtns = screen.getAllByRole('button');
		const answerBtn3 = allAnswersBtns[2];
		userEvent.click(answerBtn3);
		expect(mockValidateAnswer).toHaveBeenCalledTimes(1);
	});
});
