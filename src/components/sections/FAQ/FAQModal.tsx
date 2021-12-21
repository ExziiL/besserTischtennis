import React, { FC, useState } from 'react';

import Svg from '../../atoms/Svg/Svg';

import plus from '../../../css/icons/plus-solid.svg';
import minus from '../../../css/icons/minus-solid.svg';

export interface IFAQModal {}

const FAQModal: FC<IFAQModal> = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div className="px-4 py-3 my-4 bg-gray-100 rounded-sm sm:my-4">
			<div className="flex justify-between">
				<h1 className="flex items-center mb-0 text-lg font-semibold">How long should a car repair take?</h1>
				<div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff6433] flex justify-center items-center" onClick={toggleOpen}>
					<Svg icon={isOpen ? minus : plus} width={20} className="stroke-white" />
				</div>
			</div>
			{isOpen ? <p className="pt-2 text-gray-500 pr-14">I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet</p> : null}
		</div>
	);
};

export default FAQModal;
