import React, { FC } from 'react';

import Button from '../../atoms/Button/PrimaryButton';

import { useNavigation } from '../../../hooks/useNavigation';

export interface IErstgespräch {
	idName?: string;
}

const Erstgespräch: FC<IErstgespräch> = ({ idName }) => {
	const erstgespraechRef = useNavigation(idName);

	const handleClick = () => {
		window.open('https://calendly.com/bessertischtennis_erstgespraech');
	};

	return (
		<div className="py-12 bg-[#FF6433] scroll-mt-16" id={idName} ref={erstgespraechRef}>
			<div className="sm:w-[400px] px-4 sm:ml-16 flex flex-col items-center">
				<h1 className="pb-8 text-4xl font-semibold text-center text-white">Buche jetzt ein kostenloses Erstgespräch</h1>
				<Button onClick={handleClick} name="Zum Erstgespräch" />
			</div>
		</div>
	);
};

export default Erstgespräch;
