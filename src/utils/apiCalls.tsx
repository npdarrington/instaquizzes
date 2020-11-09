import {
	Difficulty,
	QuestionAPIModel,
	QuizQuestionModel,
	randomizeAnswers,
} from './utils';

const quizQuestionsUrl = `https://opentdb.com/api.php`;

export const getQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
): Promise<QuizQuestionModel | string> => {
	const fetchQuestions = await fetch(
		`${quizQuestionsUrl}?amount=${amount}&difficulty=${difficulty}&type=multiple`
	);
	if (fetchQuestions.ok) {
		const quizData = await fetchQuestions.json();
		return quizData.results.map((question: QuestionAPIModel) => {
			return {
				...question,
				answers: randomizeAnswers([
					...question.incorrect_answers,
					question.correct_answer,
				]),
			};
		});
	} else {
		return 'error';
	}
};
