import { useEffect, useRef } from 'react';

export const useDelayCallback = () => {
	const ref = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (ref.current) {
				clearTimeout(ref.current);
			}
		};
	}, []);

	const delay = (callback: () => unknown, ms: number) => {
		ref.current = setTimeout(callback, ms);
	};

	return { delay };
};
