import React, { FC } from 'react';

export interface ISvg {
	icon: any;
}

const Svg: FC<ISvg> = ({ icon }) => {
	return (
		<div className="">
			<img src={icon} alt="NavIcon" className="w-10 h-10" />
		</div>
	);
};

export default Svg;
