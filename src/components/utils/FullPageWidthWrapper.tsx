import React, { FC } from 'react';

export interface IFullPageWidthWrapper {
	children: React.ReactNode;
	className: string;
}

const FullPageWidthWrapper: FC<IFullPageWidthWrapper> = ({ children, className }) => {
	return (
		<div
			className={className}
			style={{
				width: '100vw',
				left: '50%',
				right: '50%',
				marginLeft: '-50vw',
				marginRight: '-50vw',
			}}
		>
			{children}
		</div>
	);
};

export default FullPageWidthWrapper;
