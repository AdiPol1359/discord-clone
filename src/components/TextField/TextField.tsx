import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '../Input/Input';

import type { ComponentProps } from 'react';

type TextFieldProps = Readonly<{
	error?: string;
	label: string;
}> &
	Omit<ComponentProps<typeof Input>, 'label'>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ error, label, required, ...props }, ref) => {
		const id = useId();

		return (
			<div className="space-y-2">
				<label
					htmlFor={id}
					className={twMerge(
						'flex gap-x-1 text-xs font-bold uppercase text-header-secondary',
						error && 'text-text-danger',
					)}
				>
					{label}
					{error && <p className="font-medium normal-case italic">- {error}</p>}
					{required && !error && <span className="text-status-danger">*</span>}
				</label>
				<Input ref={ref} id={id} label={label} required={required} {...props} />
			</div>
		);
	},
);

TextField.displayName = 'TextField';
