import { forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { SharedComponentProps } from '@/ui/ui.types';

type ButtonProps = Readonly<{
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: ReactNode;
}> &
	SharedComponentProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ type = 'button', fill, disabled, onClick, testId, children, ...props },
		ref,
	) => (
		<button
			ref={ref}
			data-test={testId}
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={twMerge(
				'h-11 w-fit rounded bg-brand-experiment px-4 font-medium text-white-500 transition-colors duration-200 focus:outline-0 enabled:hover:bg-brand-experiment-560 enabled:active:bg-brand-experiment-600 disabled:cursor-not-allowed disabled:opacity-50',
				fill && 'w-full',
			)}
			{...props}
		>
			{children}
		</button>
	),
);

Button.displayName = 'Button';
