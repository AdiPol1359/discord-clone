import { twJoin } from 'tailwind-merge';

import type { ReactNode } from 'react';

type ModalFooterProps = Readonly<{
	orientation?: 'horizontal' | 'vertical';
	children: ReactNode;
}>;

export const ModalFooter = ({
	orientation = 'horizontal',
	children,
}: ModalFooterProps) => (
	<div
		className={twJoin(
			'flex bg-modal-footer-background p-4 text-sm',
			orientation === 'horizontal' && 'justify-between',
			orientation === 'vertical' && 'flex-col gap-y-2',
		)}
	>
		{children}
	</div>
);
