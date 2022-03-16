import React, { FC } from 'react';

export interface ISvg {
	icon: any;
	onClick?: any;
	width?: number;
	className?: string;
}

const Svg: FC<ISvg> = ({ icon, onClick, width, className }) => {
	return (
		<div className={className} style={{ width: `${width}rem` }}>
			<img src={icon} alt="NavIcon" className={``} onClick={onClick} />
		</div>
	);
};

export default Svg;
