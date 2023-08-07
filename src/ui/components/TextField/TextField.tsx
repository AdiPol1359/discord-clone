import { forwardRef, useId } from 'react';

import { FormTitle } from '../FormTitle/FormTitle';
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
				<FormTitle as="label" htmlFor={id} error={Boolean(error)}>
					{label}
					{error && <p className="font-medium normal-case italic">- {error}</p>}
					{required && !error && <span className="text-status-danger">*</span>}
				</FormTitle>
				<Input ref={ref} id={id} label={label} required={required} {...props} />
			</div>
		);
	},
);

TextField.displayName = 'TextField';
