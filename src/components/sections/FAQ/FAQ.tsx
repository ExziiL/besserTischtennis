import React, { FC } from 'react';

import FAQModal from './FAQModal';
import { useNavigation } from '../../../hooks/useNavigation';

import questions from './questions';

export interface IFAQ {
	idName: string;
}

const FAQ: FC<IFAQ> = ({ idName }) => {
	const faqRef = useNavigation(idName);

	return (
		<div ref={faqRef} className="px-4 py-12 lg:py-20 bg-[#E2E6E9] flex flex-col place-items-center xl:shadow-2xl scroll-mt-8" id={idName}>
			<h1 className="pb-8 text-3xl text-center lg:pb-12">Frequency Asked Questions</h1>
			{questions.map(({ question, answer }, index) => {
				return (
					<div className="w-full max-w-2xl" key={index}>
						<FAQModal question={question} answer={answer} />
					</div>
				);
			})}
		</div>
	);
};

export default FAQ;
