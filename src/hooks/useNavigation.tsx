import { useContext, useEffect, useRef } from 'react';
import { NavContext } from '../context/NavContext';
import { useOnScreen } from './useOnScreen';

export const useNavigation = (navLinkId) => {
	const ref: any = useRef(null);

	const { setActiveNavLinkId }: any = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};

// Source für den Hook:
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1
