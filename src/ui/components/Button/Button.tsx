import { forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { SharedComponentProps } from '@/ui/ui.types';

const colors = {
	brand:
		'bg-brand-experiment enabled:hover:bg-brand-experiment-560 enabled:active:bg-brand-experiment-600',
	primary:
		'bg-button-secondary-background enabled:hover:bg-button-secondary-background-hover enabled:active:bg-button-secondary-background-active',
} as const;

const sizes = {
	xs: 'h-8',
	sm: 'h-9.5',
	md: 'h-11',
} as const;

type ButtonProps = Readonly<{
	color?: keyof typeof colors;
	size?: keyof typeof sizes;
	type?: 'button' | 'reset' | 'submit';
	form?: string;
	fill?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: ReactNode;
}> &
	SharedComponentProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			color = 'brand',
			size = 'md',
			type = 'button',
			form,
			fill,
			disabled,
			onClick,
			testId,
			children,
			...props
		},
		ref,
	) => (
		<button
			ref={ref}
			data-test={testId}
			type={type}
			form={form}
			disabled={disabled}
			onClick={onClick}
			className={twMerge(
				'h-11 w-fit min-w-[96px] rounded-[3px] px-4 font-medium text-white-500 transition-colors duration-200 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50',
				colors[color],
				sizes[size],
				fill && 'w-full',
			)}
			{...props}
		>
			{children}
		</button>
	),
);

Button.displayName = 'Button';
