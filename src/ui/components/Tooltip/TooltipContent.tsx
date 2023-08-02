import { Arrow, Content, Portal } from '@radix-ui/react-tooltip';

import type { ReactNode } from 'react';

type TooltipContentProps = Readonly<{
	position?: 'top' | 'bottom' | 'right' | 'left';
	children: ReactNode;
}>;

export const TooltipContent = ({
	position = 'top',
	children,
}: TooltipContentProps) => (
	<Portal>
		<Content
			side={position}
			sideOffset={15}
			className="theme-dark rounded-md bg-background-floating px-3 py-2 font-semibold leading-5 text-text-normal shadow-lg"
		>
			{children}
			<Arrow className="fill-background-floating" />
		</Content>
	</Portal>
);
