import React, { FC, useState } from 'react';

import Svg from '../../../atoms/Svg/Svg';
import hamburgerSVG from '../../../../css/icons/menu-burger.svg';
import cross from '../../../../css/icons/cross.svg';

export interface IMobileNavigation {
	navPoints: string[];
}

const MobileNavigation: FC<IMobileNavigation> = ({ navPoints }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-0 z-50 w-full">
			<div className={`ease-out duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
			</div>
			<div className="flex flex-row-reverse items-center w-full h-16 p-6 bg-gray-400 ">
				<Svg icon={!isOpen ? hamburgerSVG : cross} width={25} onClick={() => setIsOpen(!isOpen)} />
			</div>
		</div>
	);
};

export default MobileNavigation;
