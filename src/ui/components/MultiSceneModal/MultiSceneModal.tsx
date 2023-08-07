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

type MultiSceneModalProps = ComponentProps<typeof MultiSceneModalProvider> &
	ModalInnerProps;

export const MultiSceneModal = ({
	root,
	scenes,
	...props
}: MultiSceneModalProps) => (
	<MultiSceneModalProvider root={root} scenes={scenes}>
		<ModalInner {...props} />
	</MultiSceneModalProvider>
);
MultiSceneModal.Title = Modal.Title;
MultiSceneModal.Description = Modal.Description;
MultiSceneModal.Content = Modal.Content;
MultiSceneModal.Footer = Modal.Footer;
MultiSceneModal.Back = Modal.Back;
MultiSceneModal.Scene = MultiSceneModalScene;
