import React, { FC } from 'react';
import Stories from 'react-insta-stories';
import GioeleBild1 from '../../../css/pictures/Gioele_Bild.jpeg';
import GioeleBild3 from '../../../css/pictures/Gioele_Bild_3.jpg';

import { useNavigation } from '../../../hooks/useNavigation';

export interface IProductShowcase {
	idName: string;
}

const ProductShowcase: FC<IProductShowcase> = ({ idName }) => {
	const showcaseRef = useNavigation(idName);

	const stories: any = [
		'https://img.freepik.com/premium-photo/cute-gray-cat-kid-animal-with-interested-question-facial-face-expression-look-up-copy-space-small-tabby-kitten-white-background-vertical-format_221542-2278.jpg?w=1800',
		'https://as1.ftcdn.net/v2/jpg/04/16/01/38/1000_F_416013890_R1AHMKWKCljkSAMIxUYBUdCvND4xP2kg.jpg',
	];

	return (
		<div
			ref={showcaseRef}
			className="flex flex-col p-4 pt-10 xl:px-0 sm:mx-0 sm:pt-16 md:items-center scroll-mt-20"
			id={idName}
		>
			<h2 className="mb-8 text-4xl font-semibold md:text-center md:mb-16 md:text-5xl">Unsere Produkte</h2>
			<div className="rounded-lg shadow-lg">
				<Stories
					stories={stories}
					defaultInterval={4000}
					width={532}
					height={768}
					loop
				/>
			</div>
		</div>
	);
};

export default ProductShowcase;
