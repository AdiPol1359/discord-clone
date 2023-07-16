import { forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// TODO: FIX STORYBOOK
import Checkmark from '../../../../assets/svg/checkmark.svg';

type CheckboxProps = Readonly<{
	muted?: boolean;
	label: ReactNode;
}>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ muted, label }, ref) => (
		<label
			className={twMerge(
				'flex w-fit cursor-pointer items-center gap-x-2 text-xs font-medium text-text-normal',
				muted && 'text-text-muted',
			)}
		>
			<input ref={ref} type="checkbox" className="peer hidden" />
			<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary-400 peer-checked:border-brand-experiment-400 peer-checked:bg-brand-experiment-500 [&>*]:opacity-0 peer-checked:[&>*]:opacity-100">
				<Checkmark aria-hidden="true" />
			</div>
			{label}
		</label>
	),
);

Checkbox.displayName = 'Checkbox';
