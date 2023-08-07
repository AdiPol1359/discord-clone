import { Button } from '../Button/Button';
import { Modal } from './Modal';

import { useBoolean } from '@/hooks/useBoolean';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Modal',
	component: Modal,
	args: {
		open: false,
		children: null,
	},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleModal = () => {
	const { value, setTrue, setFalse } = useBoolean();

	return (
		<>
			<Button onClick={setTrue}>Open modal</Button>
			<Modal open={value} onClose={setFalse}>
				<Modal.Title>Example modal</Modal.Title>
				<Modal.Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Modal.Description>
				<Modal.Footer>
					<Button size="sm">Foo</Button>
					<Button size="sm" color="primary">
						Bar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: () => <ExampleModal />,
};
