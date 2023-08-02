import { Root } from '@radix-ui/react-tooltip';

import { TooltipContent } from './TooltipContent';
import { TooltipTrigger } from './TooltipTrigger';

import type { ReactNode } from 'react';

type TooltipProps = Readonly<{
	children: ReactNode;
}>;

export const Tooltip = ({ children }: TooltipProps) => <Root>{children}</Root>;

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;
