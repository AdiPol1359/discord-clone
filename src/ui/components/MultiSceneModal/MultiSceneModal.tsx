import { Modal } from '../Modal/Modal';
import {
	MultiSceneModalProvider,
	useMultiSceneModalContext,
} from './MultiSceneModalProvider';
import { MultiSceneModalScene } from './MultiSceneModalScene';

import type { ComponentProps } from 'react';

type ModalInnerProps = ComponentProps<typeof Modal>;

const ModalInner = ({ onClose, ...props }: ModalInnerProps) => {
	const { reset } = useMultiSceneModalContext();

	const handleModalClose = () => {
		reset();
		onClose?.();
	};

	return <Modal onClose={handleModalClose} {...props} />;
};

type MultiSceneModalInnerProps = ComponentProps<
	typeof MultiSceneModalProvider
> &
	ModalInnerProps;

const MultiSceneModalInner = ({
	root,
	scenes,
	...props
}: MultiSceneModalInnerProps) => (
	<MultiSceneModalProvider root={root} scenes={scenes}>
		<ModalInner {...props} />
	</MultiSceneModalProvider>
);

MultiSceneModalInner.Scene = MultiSceneModalScene;

export const MultiSceneModal = Object.assign(MultiSceneModalInner, Modal);
