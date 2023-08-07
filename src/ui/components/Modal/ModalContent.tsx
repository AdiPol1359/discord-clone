import type { ReactNode } from 'react';

type ModalContentProps = Readonly<{
	children: ReactNode;
}>;

export const ModalContent = ({ children }: ModalContentProps) => (
	<div className="p-4">{children}</div>
);
