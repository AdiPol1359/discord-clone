import { WhatInput } from '../components/WhatInput';

import type { ReactNode } from 'react';

type UIProviderProps = Readonly<{
	children: ReactNode;
}>;

export const UIProvider = ({ children }: UIProviderProps) => (
	<>
		{children}
		<WhatInput />
	</>
);
