const mockSavedQuizData = {
	id: 1605056522300,
	allQuestions: [
		{
			category: 'Science: Computers',
			type: 'multiple',
			difficulty: 'easy',
			question:
				'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
			correct_answer: 'Final',
			incorrect_answers: ['Static', 'Private', 'Public'],
			answers: ['Static', 'Final', 'Public', 'Private'],
		},
		{
			category: 'Entertainment: Video Games',
			type: 'multiple',
			difficulty: 'easy',
			question:
				'Which of the following weapons in &quot;Counter-Strike: Global Offensive&quot; does not have a right-click function?',
			correct_answer: 'XM1014',
			incorrect_answers: ['SG553', 'R8 Revolver', 'USP-S'],
			answers: ['R8 Revolver', 'USP-S', 'SG553', 'XM1014'],
		},
	],
	allAnswers: [
		{
			question:
				'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
			answer: 'Public',
			correct: false,
			correctAnswer: 'Final',
		},
		{
			question:
				'Which of the following weapons in &quot;Counter-Strike: Global Offensive&quot; does not have a right-click function?',
			answer: 'SG553',
			correct: false,
			correctAnswer: 'XM1014',
		},
	],
};

export default mockSavedQuizData;
