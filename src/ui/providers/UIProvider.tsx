import { TooltipProvider } from '../components/Tooltip/TooltipProvider';

import type { ReactNode } from 'react';

import 'what-input';
import '../assets/styles.css';

type UIProviderProps = Readonly<{
	children: ReactNode;
}>;

export const UIProvider = ({ children }: UIProviderProps) => (
	<TooltipProvider>{children}</TooltipProvider>
);
