import React, { FC } from 'react';

export interface IImage {
	className?: string;
	alt?: string;
	src?: string;
	onClick?: any;
}

const Image: FC<IImage> = ({ className, alt, src, onClick }) => {
	return <img className={className} alt={alt} src={src} onClick={onClick} />;
};

export default Image;
