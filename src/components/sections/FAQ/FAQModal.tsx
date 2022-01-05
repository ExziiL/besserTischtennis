import React, { FC, useState } from 'react';

import Svg from '../../atoms/Svg/Svg';

import plus from '../../../css/icons/plus-solid.svg';
import minus from '../../../css/icons/minus-solid.svg';

export interface IFAQModal {
	question: string;
	answer: string;
}

const FAQModal: FC<IFAQModal> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div className="px-4 py-3 my-2 bg-white rounded-sm">
			<div className="flex justify-between cursor-pointer select-none" onClick={toggleOpen}>
				<h1 className="flex items-center mb-0 text-lg font-semibold">{question}</h1>
				<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff6433] flex justify-center items-center">
					<Svg icon={isOpen ? minus : plus} width={20} className="" />
				</div>
			</div>
			{isOpen ? <p className="pt-2 text-gray-500 pr-14">{answer}</p> : null}
		</div>
	);
};

export default FAQModal;
