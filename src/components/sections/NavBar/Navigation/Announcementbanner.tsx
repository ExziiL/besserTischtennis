import React, { FC } from 'react';

import { useNavigation } from '../../../../hooks/useNavigation';
import flyer from '../../../../css/EinladungBesserTischtennis.png';

export interface IAnnouncementbanner {}

const Announcementbanner: FC<IAnnouncementbanner> = () => {
	return (
		<a href={flyer} download className="pt-4">
			<div className="w-full md:h-14 h-12 bg-[#d91b3e] cursor-pointer text-gray-50 text-center flex flex-col justify-center font-light">
				Hier gehts zum Wochenend-Camp! <div className="pt-0.5 text-xs hover:underline">Flyer herunterladen</div>
			</div>
		</a>
	);
};

export default Announcementbanner;
