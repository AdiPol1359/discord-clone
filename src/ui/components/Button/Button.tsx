import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

import type { SharedComponentProps } from '@/ui/ui.types';

type ButtonProps = Readonly<{
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: ReactNode;
}> &
	SharedComponentProps;

export const Button = ({
	type = 'button',
	fill,
	disabled,
	onClick,
	testId,
	children,
}: ButtonProps) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		data-test={testId}
		className={twMerge(
			'h-11 w-fit rounded bg-brand-experiment px-4 font-medium text-white-500 transition-colors duration-200 focus:outline-0 enabled:hover:bg-brand-experiment-560 enabled:active:bg-brand-experiment-600 disabled:cursor-not-allowed disabled:opacity-50',
			fill && 'w-full',
		)}
	>
		{children}
	</button>
);
