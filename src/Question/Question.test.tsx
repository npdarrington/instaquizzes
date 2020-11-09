import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { QuizQuestionModel } from '../utils/utils';

import Question from '../Question/Question';

const mockValidateAnswer = jest.fn();

describe('Question', () => {
	let mockQuestions: any;
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
});
