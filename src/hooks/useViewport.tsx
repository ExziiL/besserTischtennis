import { useContext } from 'react';
import { viewportContext } from '../context/ViewportProvider';

export const useViewport = () => {
	const { width, height } = useContext(viewportContext);
	return { width, height };
};
