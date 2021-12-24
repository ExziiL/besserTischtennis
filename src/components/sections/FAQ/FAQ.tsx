import React, { FC } from 'react';

import FAQModal from './FAQModal';

export interface IFAQ {}

const FAQ: FC<IFAQ> = () => {
	return (
		<div className="p-4 bg-[#E2E6E9]">
			<h1 className="text-3xl text-center">Frequency Asked Questions</h1>
			<FAQModal />
			<FAQModal />
			<FAQModal />
			<FAQModal />
			<FAQModal />
		</div>
	);
};

export default FAQ;
