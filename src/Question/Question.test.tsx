import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { QuizQuestionModel } from '../utils/utils';

describe('Question', () => {
	let mockQuestion: any;
	beforeEach(() => {
		mockQuestion = [
			[
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
			],
		];
	});
	test('should show the category of the question', () => {});
});
