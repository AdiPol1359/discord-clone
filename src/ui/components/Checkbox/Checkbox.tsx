import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import Checkmark from '@/ui/assets/svg/checkmark.svg';

import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

type CheckboxProps = Readonly<{
	muted?: boolean;
	name?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	label: ReactNode;
}>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ muted, name, onChange, onBlur, label }, ref) => (
		<label
			className={twMerge(
				'flex w-fit cursor-pointer items-center gap-x-2 text-xs font-medium text-text-normal',
				muted && 'text-text-muted',
			)}
		>
			<input
				ref={ref}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				type="checkbox"
				className="peer hidden"
			/>
			<button
				type="button"
				className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary-400 focus:outline-0 peer-checked:border-brand-experiment-400 peer-checked:bg-brand-experiment-500 [&>*]:opacity-0 peer-checked:[&>*]:opacity-100"
			>
				<Checkmark aria-hidden="true" />
			</button>
			{label}
		</label>
	),
);

Checkbox.displayName = 'Checkbox';
