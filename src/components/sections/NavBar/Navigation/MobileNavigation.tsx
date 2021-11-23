import React, { FC, useState } from 'react';

import MenuBar from '../../../organisms/MenuBar/MenuBar';
import hamburgerSVG from '../../../../css/icons/menu-burger.svg';
import cross from '../../../../css/icons/cross.svg';

export interface IMobileNavigation {
	navPoints: string[];
}

const MobileNavigation: FC<IMobileNavigation> = ({ navPoints }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sticky z-10 bottom-14 ">
			{isOpen ? (
				<ul className="">
					{navPoints.map((navPoint, index) => (
						<p key={index} className="p-10 text-xl bg-gray-300 ">
							<a href="#" className="">
								{navPoint}
							</a>
						</p>
					))}
				</ul>
			) : null}

			<div>
				<MenuBar icon={!isOpen ? hamburgerSVG : cross} onClick={() => setIsOpen(!isOpen)} />
			</div>
		</div>
	);
};

export default MobileNavigation;
