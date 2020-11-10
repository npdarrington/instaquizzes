export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

enum AnswerType {
	CORRECT = 'correct',
	INCORRECT = 'incorrect',
}

export interface QuestionAPIModel {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

export interface CombinedAnswersModel {
	answers: string[];
}

export type QuizQuestionModel = QuestionAPIModel & CombinedAnswersModel;

export interface UserAnswerModel {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
}

export interface SavedQuizGamesModel {
	id: number;
	allQuestions: QuizQuestionModel[];
	allAnswers: UserAnswerModel[];
}

export const randomizeAnswers = (answers: string[]) => {
	const randomizedAnswers = [];
	const iteration: number = answers.length;
	for (let i = 0; i < iteration; i++) {
		let getRandomIndex = Math.floor(Math.random() * answers.length);
		randomizedAnswers.push(answers.splice(getRandomIndex, 1)[0]);
	}
	return randomizedAnswers;
};

export const displayCorrectPercentage = (quiz: any) => {
	const correctAnswers = quiz.filter((question: any) => question.correct)
		.length;
	return (correctAnswers / quiz.length) * 100;
};

export const displayAnswersCount = (pattern: string, quiz: any): number => {
	if (pattern === AnswerType.CORRECT) {
		return quiz.filter((question: any) => question.correct).length;
	} else {
		return quiz.filter((question: any) => !question.correct).length;
	}
};
