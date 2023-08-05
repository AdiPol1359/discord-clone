import { Trigger } from '@radix-ui/react-tooltip';

import type { ReactNode } from 'react';

type TooltipTriggerProps = Readonly<{
	children: ReactNode;
}>;

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => (
	<Trigger asChild>{children}</Trigger>
);
