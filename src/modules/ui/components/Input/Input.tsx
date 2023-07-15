import { forwardRef } from 'react';

import type { ChangeEventHandler, FocusEventHandler } from 'react';

type InputProps = Readonly<{
	id?: string;
	name?: string;
	type?: 'text' | 'email' | 'password';
	label?: string;
	placeholder?: string;
	autoComplete?: boolean;
	spellCheck?: boolean;
	required?: boolean;
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
			onChange,
			onBlur,
		},
		ref,
	) => (
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
			className="w-full rounded bg-input-background p-2.5 text-text-normal focus:outline-none"
			{...(!autoComplete && { autoComplete: 'off' })}
			{...(!spellCheck && { spellCheck })}
		/>
	),
);

Input.displayName = 'Input';
