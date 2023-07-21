import { twJoin } from 'tailwind-merge';

import { Button } from '../Button/Button';

import type { ComponentProps } from 'react';

type LoadingButtonProps = Readonly<{
	loading: boolean;
}> &
	ComponentProps<typeof Button>;

const STYLES =
	'block h-1.5 w-1.5 animate-loading rounded-full bg-white-500 opacity-30';

export const LoadingButton = ({
	loading,
	disabled,
	children,
	...props
}: LoadingButtonProps) => (
	<Button disabled={disabled || loading} {...props}>
		{loading ? (
			<span
				aria-label="Loading"
				className="flex items-center justify-center gap-x-1"
			>
				<span className={STYLES} />
				<span className={twJoin(STYLES, 'animation-delay-200')} />
				<span className={twJoin(STYLES, 'animation-delay-400')} />
			</span>
		) : (
			children
		)}
	</Button>
);
