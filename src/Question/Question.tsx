import React from 'react';

interface IProps {
	category: string;
}

const Question: React.FC<IProps> = () => {
	return (
		<article className='question-card'>
			<h3 className='question-number'>Quiz Category Here</h3>
			<p className='question-number'>Question: 1 / 15</p>
			<p className='question'>Insert Question Here</p>
			<section className='answers'>Insert Answers Here</section>
		</article>
	);
};

export default Question;
