import type { ReactNode } from 'react';

type ControlsGroupProps = Readonly<{
	label: string;
	children: ReactNode;
}>;

export const ControlsGroup = ({ label, children }: ControlsGroupProps) => (
	<fieldset className="space-y-2">
		<legend className="text-xs font-bold uppercase text-header-secondary">
			{label}
		</legend>
		<div className="flex justify-between gap-x-3">{children}</div>
	</fieldset>
);
