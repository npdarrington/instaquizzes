const mockSavedQuizzesData = [
	{
		id: 1605021117884,
		allQuestions: [
			{
				category: 'Entertainment: Video Games',
				type: 'multiple',
				difficulty: 'easy',
				question:
					'Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?',
				correct_answer: 'Quake Engine',
				incorrect_answers: ['Doom Engine', 'id Engine', 'Source Engine'],
				answers: ['Source Engine', 'Doom Engine', 'id Engine', 'Quake Engine'],
			},
			{
				category: 'Entertainment: Video Games',
				type: 'multiple',
				difficulty: 'easy',
				question: 'Who is the leader of Team Instinct in Pok&eacute;mon Go?',
				correct_answer: 'Spark',
				incorrect_answers: ['Candela', 'Blanche', 'Willow'],
				answers: ['Spark', 'Blanche', 'Candela', 'Willow'],
			},
		],
		allAnswers: [
			{
				question:
					'Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?',
				answer: 'Quake Engine',
				correct: true,
				correctAnswer: 'Quake Engine',
			},
			{
				question: 'Who is the leader of Team Instinct in Pok&eacute;mon Go?',
				answer: 'Willow',
				correct: false,
				correctAnswer: 'Spark',
			},
		],
	},
	{
		id: 1605021135489,
		allQuestions: [
			{
				category: 'Entertainment: Books',
				type: 'multiple',
				difficulty: 'easy',
				question:
					'Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?',
				correct_answer: 'William Golding',
				incorrect_answers: [
					'Stephen King',
					'F. Scott Fitzgerald',
					'Hunter Fox',
				],
				answers: [
					'William Golding',
					'F. Scott Fitzgerald',
					'Hunter Fox',
					'Stephen King',
				],
			},
			{
				category: 'Entertainment: Japanese Anime & Manga',
				type: 'multiple',
				difficulty: 'easy',
				question:
					'Which part from the JoJo&#039;s Bizarre Adventure manga is about a horse race across America?',
				correct_answer: 'Part 7: Steel Ball Run',
				incorrect_answers: [
					'Part 6: Stone Ocean',
					'Part 3: Stardust Crusaders',
					'Part 5: Golden Wind',
				],
				answers: [
					'Part 7: Steel Ball Run',
					'Part 3: Stardust Crusaders',
					'Part 6: Stone Ocean',
					'Part 5: Golden Wind',
				],
			},
		],
		allAnswers: [
			{
				question:
					'Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?',
				answer: 'William Golding',
				correct: true,
				correctAnswer: 'William Golding',
			},
			{
				question:
					'Which part from the JoJo&#039;s Bizarre Adventure manga is about a horse race across America?',
				answer: 'Part 5: Golden Wind',
				correct: false,
				correctAnswer: 'Part 7: Steel Ball Run',
			},
		],
	},
];

export default mockSavedQuizzesData;
