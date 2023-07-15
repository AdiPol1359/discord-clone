import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: ReactNode;
}>;

export const Button = ({
	type = 'button',
	fill,
	disabled,
	onClick,
	children,
}: ButtonProps) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		className={twMerge(
			'h-11 w-fit rounded bg-brand-experiment px-4 font-semibold text-white-500 transition-colors duration-200 enabled:hover:bg-brand-experiment-560 enabled:active:bg-brand-experiment-600 disabled:cursor-not-allowed disabled:opacity-50',
			fill && 'w-full',
		)}
	>
		{children}
	</button>
);
