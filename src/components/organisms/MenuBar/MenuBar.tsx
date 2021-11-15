import React, { FC } from 'react';

export interface IMenuBar {
	icon: any;
	onClick: any;
}

const MenuBar: FC<IMenuBar> = ({ icon, onClick }) => {
	return (
		<div className="absolute bottom-0 flex items-center w-full h-20 pl-6 bg-gray-400">
			<img src={icon} alt="NavIcon" className="w-10 h-10" onClick={onClick} />
		</div>
	);
};

export default MenuBar;
