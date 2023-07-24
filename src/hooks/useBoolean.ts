import { useState } from 'react';

export const useBoolean = (initialState?: boolean) => {
	const [value, setValue] = useState(Boolean(initialState));

	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);
	const toggle = () => setValue((prev) => !prev);

	return { value, setTrue, setFalse, toggle };
};
