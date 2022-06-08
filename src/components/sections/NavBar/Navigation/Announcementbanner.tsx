import React, { FC } from 'react';

import { useNavigation } from '../../../../hooks/useNavigation';

export interface IAnnouncementbanner {}

const Announcementbanner: FC<IAnnouncementbanner> = () => {
	return <div className="w-full md:h-12 h-10 bg-[#d91b3e] cursor-pointer text-gray-50 text-center flex flex-col justify-center font-light">Hier gehts zum Wochenend-Camp!</div>;
};

export default Announcementbanner;
