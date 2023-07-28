import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import type {
	AriaRole,
	ChangeEventHandler,
	CompositionEventHandler,
	FocusEventHandler,
	KeyboardEventHandler,
	ReactNode,
} from 'react';

import type { SharedComponentProps } from '@/ui/ui.types';

type InputProps = Readonly<{
	id?: string;
	name?: string;
	role?: AriaRole;
	type?: 'text' | 'email' | 'password';
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	autoComplete?: boolean;
	spellCheck?: boolean;
	disabled?: boolean;
	required?: boolean;
	icon?: ReactNode;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
	onCompositionStart?: CompositionEventHandler<HTMLInputElement>;
	onCompositionEnd?: CompositionEventHandler<HTMLInputElement>;
}> &
	SharedComponentProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			id,
			name,
			role,
			type = 'text',
			label,
			placeholder,
			defaultValue,
			autoComplete = true,
			spellCheck = true,
			disabled,
			required,
			icon,
			testId,
			onBlur,
			onChange,
			onKeyDown,
			onCompositionStart,
			onCompositionEnd,
			...props
		},
		ref,
	) => (
		<div className="relative">
			<input
				ref={ref}
				id={id}
				data-test={testId}
				name={name}
				role={role}
				type={type}
				aria-label={label}
				placeholder={placeholder}
				defaultValue={defaultValue}
				disabled={disabled}
				required={required}
				onBlur={onBlur}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onCompositionStart={onCompositionStart}
				onCompositionEnd={onCompositionEnd}
				className={twJoin(
					'w-full rounded bg-input-background p-2.5 text-text-normal placeholder-text-muted focus:outline-0',
					icon && 'pr-9',
				)}
				{...(!autoComplete && { autoComplete: 'off' })}
				{...(!spellCheck && { spellCheck })}
				{...props}
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
