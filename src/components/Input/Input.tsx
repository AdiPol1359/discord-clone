import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

type InputProps = Readonly<{
	id?: string;
	name?: string;
	type?: 'text' | 'email' | 'password';
	label?: string;
	placeholder?: string;
	autoComplete?: boolean;
	spellCheck?: boolean;
	required?: boolean;
	icon?: ReactNode;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			id,
			name,
			type = 'text',
			label,
			placeholder,
			autoComplete = true,
			spellCheck = true,
			required,
			icon,
			onChange,
			onBlur,
		},
		ref,
	) => (
		<div className="relative">
			<input
				ref={ref}
				id={id}
				name={name}
				type={type}
				aria-label={label}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				onBlur={onBlur}
				className={twJoin(
					'w-full rounded bg-input-background p-2.5 text-text-normal placeholder-text-muted focus:outline-none',
					icon && 'pr-9',
				)}
				{...(!autoComplete && { autoComplete: 'off' })}
				{...(!spellCheck && { spellCheck })}
			/>
			{icon && (
				<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 [&>*]:fill-interactive-normal">
					{icon}
				</div>
			)}
		</div>
	),
);

Input.displayName = 'Input';
