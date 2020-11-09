export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export const randomizeAnswer = (answers: string[]) => {
	Math.floor(Math.random() * answers.length);
};
