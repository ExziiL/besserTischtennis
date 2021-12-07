import React, { FC, useState } from 'react';

export interface IFAQModal {}

const FAQModal: FC<IFAQModal> = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="m-4">
			<div>
				<h1 className="mb-4 text-lg font-semibold">How long should a car repair take?</h1>
				{isOpen ? <p className="text-gray-500">I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet</p> : null}
			</div>
		</div>
	);
};

export default FAQModal;
