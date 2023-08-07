import { Description } from '@radix-ui/react-dialog';

import type { ReactNode } from 'react';

type ModalDescriptionProps = Readonly<{
	children: ReactNode;
}>;

export const ModalDescription = ({ children }: ModalDescriptionProps) => (
	<Description className="mt-1.5 text-center leading-5 text-header-secondary">
		{children}
	</Description>
);
