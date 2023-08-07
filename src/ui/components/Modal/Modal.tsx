import * as Dialog from '@radix-ui/react-dialog';

import { ModalBack } from './ModalBack';
import { ModalContent } from './ModalContent';
import { ModalDescription } from './ModalDescription';
import { ModalFooter } from './ModalFooter';
import { ModalTitle } from './ModalTitle';

import CloseIcon from '@/guilds/assets/close.svg';

import type { ReactNode } from 'react';

type ModalProps = Readonly<{
	open: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	children?: ReactNode;
}>;

export const Modal = ({ open, onOpen, onClose, children }: ModalProps) => (
	<Dialog.Root
		open={open}
		onOpenChange={(open) => {
			if (open) {
				onOpen?.();
			} else {
				onClose?.();
			}
		}}
	>
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black/70" />
			<Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded bg-modal-background pt-2">
				<Dialog.Close
					aria-label="Close modal"
					className="absolute right-5 top-5 text-interactive-normal opacity-50 transition-opacity hover:opacity-100"
				>
					<CloseIcon aria-hidden="true" />
				</Dialog.Close>
				{children}
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Back = ModalBack;
