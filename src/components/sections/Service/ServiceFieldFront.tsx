import React, { FC } from 'react';

import Svg from '../../atoms/Svg/Svg';

export interface IServiceFieldFront {
	header: string;
	icon: any;
	className?: any;
}

const ServiceFieldFront: FC<IServiceFieldFront> = ({ header, icon, className }) => {
	return (
		<div className={` ${className} flex flex-col justify-center h-content h-48 bg-white shadow-md sm:h-60`}>
			<div className="flex flex-col items-center space-y-3">
				<Svg icon={icon} width={2} />
				<h2 className="px-1 text-sm font-semibold leading-4 text-center text-black">{header}</h2>
			</div>
			<p className="absolute self-center text-xs text-black bottom-4 hover:underline">Mehr anzeigen</p>
		</div>
	);
};

export default ServiceFieldFront;
