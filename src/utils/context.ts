import { createContext, useContext } from 'react';

export const createSafeContext = <T>() => {
	const context = createContext<T | null>(null);

	const useSafeContext = () => {
		const ctx = useContext(context);

		if (!ctx) {
			throw new Error('useContext must be use inside Provider!');
		}

		return ctx;
	};

	return [context.Provider, useSafeContext] as const;
};
