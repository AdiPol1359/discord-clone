import type { ReactNode } from 'react';

type ModalBackProps = Readonly<{
	onClick?: () => void;
	children: ReactNode;
}>;

export const ModalBack = ({ onClick, children }: ModalBackProps) => (
	<button
		type="button"
		onClick={onClick}
		className="text-primary-400 hover:underline"
	>
		{children}
	</button>
);
