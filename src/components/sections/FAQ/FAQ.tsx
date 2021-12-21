import React, { FC } from 'react';

import FAQModal from './FAQModal';

export interface IFAQ {}

const FAQ: FC<IFAQ> = () => {
	return (
		<div className="m-4">
			<h1>Frequency Asked Questions</h1>
			<FAQModal />
			<FAQModal />
			<FAQModal />
			<FAQModal />
			<FAQModal />
		</div>
	);
};

export default FAQ;
