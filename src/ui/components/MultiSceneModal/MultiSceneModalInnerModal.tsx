import { Modal } from '../Modal/Modal';
import { useMultiSceneModalContext } from './MultiSceneModalProvider';

import type { ComponentProps } from 'react';

export const MultiSceneModalInnerModal = ({
	onUnmount,
	...props
}: ComponentProps<typeof Modal>) => {
	const { reset } = useMultiSceneModalContext();

	const handleModalUnmount = () => {
		reset();
		onUnmount?.();
	};

	return <Modal onUnmount={handleModalUnmount} {...props} />;
};
