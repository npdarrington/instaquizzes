import React from 'react';

interface IProps {
	category: string;
	question: string;
	answers: string[];
}

const Question: React.FC<IProps> = ({ category, question, answers }) => {
	return (
		<article className='question-card'>
			<h3 className='question-number'>{category}</h3>
			<p className='question-number'>Question: 1 / 15</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<section className='answers'>
				{answers.map((answer, i) => (
					<button key={i} dangerouslySetInnerHTML={{ __html: answer }} />
				))}
			</section>
		</article>
	);
};

export default Question;
