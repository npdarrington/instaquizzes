import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getQuizQuestions } from '../utils/apiCalls';

import App from './App';

describe('App', () => {
	beforeEach(() => {
		render(<App />);
	});
});
