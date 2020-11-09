export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export interface QuestionAPIModel {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export interface CombineAnswersModel {
	answers: [];
}

export const randomizeAnswer = (answers: string[]) => {
	Math.floor(Math.random() * answers.length);
};
