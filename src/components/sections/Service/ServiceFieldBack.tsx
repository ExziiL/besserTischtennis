import React, { FC } from 'react';
import { useViewport } from '../../../hooks/useViewport';

import Svg from '../../atoms/Svg/Svg';

export interface IServiceFieldBack {
	className?: any;
	title: any;
	listItems: any;
}

const ServiceFieldBack: FC<IServiceFieldBack> = ({ className, title, listItems }) => {
	const { width } = useViewport();
	const breakpoint = 640;

	return (
		<div className={`${className} flex flex-col p-2 sm:p-4 h-48 space-y-1 sm:space-y-3 bg-white shadow-md sm:h-60`}>
			<h1 className="mx-auto text-sm font-bold leading-4 text-center w-60 ">{title}</h1>
			<div>
				<ul className="space-y-1 text-xs sm:space-y-3">
					{listItems.map((item, index) => (
						<li className="" key={index}>
							{'>'} {item}
						</li>
					))}
				</ul>
			</div>
			<p className="absolute self-center text-xs text-black bottom-4 hover:underline">zurück</p>
		</div>
	);
};

export default ServiceFieldBack;
