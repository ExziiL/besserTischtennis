import React, { FC } from 'react';

import Svg from '../../atoms/Svg/Svg';

export interface IServiceField {
	header: string;
	icon: any;
	className?: any;
}

const ServiceField: FC<IServiceField> = ({ header, icon, className }) => {
	return (
		<div className={` ${className} flex flex-col items-center justify-center h-40 space-y-3 bg-white shadow-md sm:h-60`}>
			<Svg icon={icon} width={2} />
			<h2 className="px-1 text-sm font-semibold leading-4 text-center text-black">{header}</h2>
		</div>
	);
};

export default ServiceField;
