import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SavedQuizDetails from './SavedQuizDetails';
import { SavedQuizGamesModel } from '../utils/utils';
import mockSavedQuizData from '../SavedQuiz/mocksavedQuizData';

const mockData: SavedQuizGamesModel = mockSavedQuizData;
