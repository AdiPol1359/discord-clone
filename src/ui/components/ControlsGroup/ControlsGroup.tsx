import { FormTitle } from '../FormTitle/FormTitle';

import type { ReactNode } from 'react';

type ControlsGroupProps = Readonly<{
	label: string;
	children: ReactNode;
}>;

export const ControlsGroup = ({ label, children }: ControlsGroupProps) => (
	<fieldset className="space-y-2">
		<FormTitle as="legend">{label}</FormTitle>
		<div className="flex justify-between gap-x-3">{children}</div>
	</fieldset>
);
