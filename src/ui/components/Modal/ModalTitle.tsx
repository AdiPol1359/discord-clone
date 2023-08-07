import { Title } from '@radix-ui/react-dialog';

import type { ReactNode } from 'react';

type ModalTitleProps = Readonly<{
	children: ReactNode;
}>;

export const ModalTitle = ({ children }: ModalTitleProps) => (
	<Title className="text-center text-2xl font-bold text-header-primary">
		{children}
	</Title>
);
