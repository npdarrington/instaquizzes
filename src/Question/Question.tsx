import React from 'react';

interface IProps {
	category: string;
	question: string;
	answers: string[];
	validateAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
	currentQuestionNum: number;
	questionCount: number;
}

const Question: React.FC<IProps> = ({
	category,
	question,
	answers,
	validateAnswer,
	currentQuestionNum,
	questionCount,
}) => {
	return (
		<article className='question-card'>
			<h3 className='question-number'>{category}</h3>
			<p className='question-number'>{`Question ${currentQuestionNum} / ${questionCount}`}</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<section className='answers'>
				{answers.map((answer, i) => (
					<button
						key={i}
						dangerouslySetInnerHTML={{ __html: answer }}
						onClick={validateAnswer}
					/>
				))}
			</section>
		</article>
	);
};

export default Question;
