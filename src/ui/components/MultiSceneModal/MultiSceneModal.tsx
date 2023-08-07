import { Modal } from '../Modal/Modal';
import { MultiSceneModalInnerModal } from './MultiSceneModalInnerModal';
import { MultiSceneModalProvider } from './MultiSceneModalProvider';
import { MultiSceneModalScene } from './MultiSceneModalScene';

import type { ComponentProps } from 'react';

type MultiSceneModalProps = ComponentProps<typeof MultiSceneModalProvider> &
	ComponentProps<typeof MultiSceneModalInnerModal>;

export const MultiSceneModal = ({
	root,
	scenes,
	...props
}: MultiSceneModalProps) => (
	<MultiSceneModalProvider root={root} scenes={scenes}>
		<MultiSceneModalInnerModal {...props} />
	</MultiSceneModalProvider>
);

MultiSceneModal.Title = Modal.Title;
MultiSceneModal.Description = Modal.Description;
MultiSceneModal.Content = Modal.Content;
MultiSceneModal.Footer = Modal.Footer;
MultiSceneModal.Back = Modal.Back;
MultiSceneModal.Scene = MultiSceneModalScene;
