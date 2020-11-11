import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SavedQuizDetails from './SavedQuizDetails';
import { SavedQuizGamesModel } from '../utils/utils';
import mockSavedQuizData from '../SavedQuiz/mocksavedQuizData';

const mockData: SavedQuizGamesModel = mockSavedQuizData;

describe('SavedQuizDetails', () => {
	test('should render all quiz information that is saved in full detail', () => {
		render(
			<MemoryRouter>
				<SavedQuizDetails savedQuiz={mockData} />
			</MemoryRouter>
		);
		expect(screen.getByText('Question: 1')).toBeInTheDocument();
		expect(
			screen.getByText('Category: Science: Computers')
		).toBeInTheDocument();
		expect(
			screen.getByText(
				`In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?`
			)
		).toBeInTheDocument();
		expect(screen.getByText('Static')).toBeInTheDocument();
		expect(screen.getByText('Final')).toBeInTheDocument();
		expect(screen.getByText('Public')).toBeInTheDocument();
		expect(screen.getByText('Private')).toBeInTheDocument();
		expect(screen.getByText('Correct Answer: Final')).toBeInTheDocument();
		expect(screen.getByText('Your Answer: Public')).toBeInTheDocument();
		expect(screen.getByText('Question: 2')).toBeInTheDocument();
		expect(
			screen.getByText('Category: Entertainment: Video Games')
		).toBeInTheDocument();
		expect(
			screen.getByText(
				`Which of the following weapons in "Counter-Strike: Global Offensive" does not have a right-click function?`
			)
		).toBeInTheDocument();
		expect(screen.getByText('R8 Revolver')).toBeInTheDocument();
		expect(screen.getByText('USP-S')).toBeInTheDocument();
		expect(screen.getByText('SG553')).toBeInTheDocument();
		expect(screen.getByText('XM1014')).toBeInTheDocument();
		expect(screen.getByText('Correct Answer: XM1014')).toBeInTheDocument();
		expect(screen.getByText('Your Answer: SG553')).toBeInTheDocument();
	});
});
