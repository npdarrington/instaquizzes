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

export interface CombinedAnswersModel {
	answers: [];
}

export type QuizQuestionModel = QuestionAPIModel & CombinedAnswersModel;

export const randomizeAnswers = (answers: string[]) => {
	const randomizedAnswers = [];
	const iteration: number = answers.length;
	for (let i = 0; i < iteration; i++) {
		let getRandomIndex = Math.floor(Math.random() * answers.length);
		randomizedAnswers.push(answers.splice(getRandomIndex, 1)[0]);
	}
	return randomizedAnswers;
};

export const cleanQuestionHTML = (allQuestions: QuizQuestionModel[]) => {
	return allQuestions.map(question => {
		if (question.question.includes('quot;')) {
			question.question = question.question.replace('quot;', '"');
		}
		return question;
	});
};
