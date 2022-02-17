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
		<div className="px-4 py-3 my-2 bg-white rounded-sm md:py-5 md:px-7">
			<div className="flex items-center justify-between cursor-pointer select-none" onClick={toggleOpen}>
				<h1 className="flex items-center mb-0 font-semibold leading-6 md:text-lg">{question}</h1>
				<div className=" sm:w-12 min-w-[40px] min-h-[40px] sm:h-12 bg-[#ff6433] flex justify-center items-center sm:min-w-[48px] sm:min-h-[48px] ml-2">
					<Svg icon={isOpen ? minus : plus} width={20} className="" />
				</div>
			</div>
			{isOpen ? <p className="pt-2 text-sm text-gray-500 md:text-base pr-14">{answer}</p> : null}
		</div>
	);
};

export default FAQModal;
