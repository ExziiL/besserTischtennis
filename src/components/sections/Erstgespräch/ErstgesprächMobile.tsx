import React, { FC } from 'react';

import Button from '../../atoms/Button/PrimaryButton';

export interface IErstgespräch {}

const Erstgespräch: FC<IErstgespräch> = ({}) => {
	return (
		<div className="py-12 bg-[#FF6433]">
			<div className="sm:w-[400px] px-4 sm:ml-16">
				<h1 className="pb-8 text-4xl font-semibold text-white">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button name="Zum Erstgespräch" />
			</div>
		</div>
	);
};

export default Erstgespräch;
