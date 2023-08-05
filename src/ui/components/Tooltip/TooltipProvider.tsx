import { Provider } from '@radix-ui/react-tooltip';

import type { ReactNode } from 'react';

type TooltipProviderProps = Readonly<{
	children: ReactNode;
}>;

export const TooltipProvider = ({ children }: TooltipProviderProps) => (
	<Provider delayDuration={0}>{children}</Provider>
);
