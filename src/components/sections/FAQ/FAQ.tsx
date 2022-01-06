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
		<div ref={faqRef} className="px-4 py-12 bg-[#E2E6E9] flex flex-col place-items-center xl:shadow-2xl" id={idName}>
			<h1 className="text-3xl text-center">Frequency Asked Questions</h1>
			{questions.map(({ question, answer }) => {
				return (
					<div className="w-full max-w-2xl">
						<FAQModal question={question} answer={answer} />
					</div>
				);
			})}
		</div>
	);
};

export default FAQ;
