import React, { FC } from 'react';

import Svg from '../../atoms/Svg/Svg';

export interface IServiceField {
	header: string;
	icon: any;
}

const ServiceField: FC<IServiceField> = ({ header, icon }) => {
	return (
		<div className="flex flex-col items-center justify-center h-40 space-y-3 bg-white shadow-md sm:h-60">
			<Svg icon={icon} />
			<h2 className="px-1 text-sm font-semibold leading-4 text-center">{header}</h2>
		</div>
	);
};

export default ServiceField;
