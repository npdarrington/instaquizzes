import {
	Difficulty,
	QuestionAPIModel,
	randomizeAnswers,
	cleanQuestionHtml,
} from './utils';

const quizQuestionsUrl = `https://opentdb.com/api.php`;

export const getQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
): Promise<any> => {
	const fetchQuestions = await fetch(
		`${quizQuestionsUrl}?amount=${amount}&difficulty=${difficulty}&type=multiple`
	);
	if (fetchQuestions.ok) {
		const quizData = await fetchQuestions.json();
		const addAnswersArray = quizData.results.map(
			(question: QuestionAPIModel) => {
				return {
					...question,
					answers: randomizeAnswers([
						...question.incorrect_answers,
						question.correct_answer,
					]),
				};
			}
		);
		const cleanAllQuestions = cleanQuestionHtml(addAnswersArray);
		return cleanAllQuestions;
	}
};
