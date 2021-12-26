import React, { FC } from 'react';

import Timeline from './Timeline/Timeline';

export interface IDasBinIch {}

const DasBinIch: FC<IDasBinIch> = () => {
	return (
		<div className="flex flex-col p-4 mt-12 mb-12 sm:mx-0">
			<div>
				<div className="text-4xl font-semibold leading-9">
					<h1>Das bin ich:</h1>
					<h1>Giole Vulcano</h1>
				</div>
				<p className="mt-4 font-semibold text-gray-500">Ich bin 20 Jahre jung und komme aus Besigheim, das liegt ca. 25 km entfernt von Stuttgart.</p>
			</div>
			<Timeline className="" />
		</div>
	);
};

export default DasBinIch;
