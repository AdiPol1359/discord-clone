import { Modal } from '../Modal/Modal';
import { useMultiSceneModalContext } from './MultiSceneModalProvider';

import type { ComponentProps } from 'react';

export const MultiSceneModalInnerModal = ({
	onClose,
	...props
}: ComponentProps<typeof Modal>) => {
	const { reset } = useMultiSceneModalContext();

	const handleModalClose = () => {
		reset();
		onClose?.();
	};

	return <Modal onClose={handleModalClose} {...props} />;
};
