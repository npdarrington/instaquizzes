import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { QuizQuestionModel } from '../utils/utils';

import Question from '../Question/Question';

const mockValidateAnswer = jest.fn();

describe('Question', () => {
	let mockQuestion: any;
	beforeEach(() => {
		mockQuestion = [
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
		];
	});

	test('should show the category of the question', () => {
		render(
			<Question
				category={mockQuestion[0].category}
				question={mockQuestion[0].question}
				answers={mockQuestion[0].answers}
				validateAnswer={mockValidateAnswer}
				currentQuestionNum={1}
				questionCount={mockQuestion.length}
			/>
		);
		screen.debug();
	});
});
