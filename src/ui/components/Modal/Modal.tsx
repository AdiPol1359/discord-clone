import * as Dialog from '@radix-ui/react-dialog';

import { ModalBack } from './ModalBack';
import { ModalContent } from './ModalContent';
import { ModalDescription } from './ModalDescription';
import { ModalFooter } from './ModalFooter';
import { ModalTitle } from './ModalTitle';

import CloseIcon from '@/ui/assets/svg/close.svg';
import { useDelayCallback } from '@/ui/hooks/useDelayCallback';

import type { ReactNode } from 'react';

type ModalProps = Readonly<{
	open: boolean;
	onClose?: () => void;
	onUnmount?: () => void;
	children?: ReactNode;
}>;

const ANIMATION_DURATION = 200;

export const Modal = ({ open, onClose, onUnmount, children }: ModalProps) => {
	const { delay } = useDelayCallback();

	return (
		<Dialog.Root
			open={open}
			onOpenChange={() => {
				onClose?.();
				delay(() => onUnmount?.(), ANIMATION_DURATION);
			}}
		>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black-500 opacity-85 data-[state=closed]:animate-modal-overlay-hide data-[state=open]:animate-modal-overlay-show" />
				<Dialog.Content className="fixed h-full w-full overflow-hidden bg-modal-background pt-2 data-[state=closed]:animate-modal-content-hide data-[state=open]:animate-modal-content-show sm:left-1/2 sm:top-1/2 sm:h-fit sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded">
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
};

Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Back = ModalBack;
