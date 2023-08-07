import { Button } from '../Button/Button';
import { MultiSceneModal } from './MultiSceneModal';
import { useMultiSceneModalContext } from './MultiSceneModalProvider';

import { useBoolean } from '@/hooks/useBoolean';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'MultiSceneModal',
	component: MultiSceneModal,
	args: {
		open: false,
		root: null,
		children: null,
		scenes: {},
	},
} satisfies Meta<typeof MultiSceneModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const RootScene = () => {
	const { show } = useMultiSceneModalContext<Scene>();

	return (
		<>
			<MultiSceneModal.Content>Root scene</MultiSceneModal.Content>
			<MultiSceneModal.Footer>
				<Button size="sm" onClick={() => show('first')} fill>
					First scene
				</Button>
			</MultiSceneModal.Footer>
		</>
	);
};

const FirstScene = () => {
	const { back, show } = useMultiSceneModalContext<Scene>();

	return (
		<>
			<MultiSceneModal.Content>First scene</MultiSceneModal.Content>
			<MultiSceneModal.Footer>
				<MultiSceneModal.Back onClick={back}>Back</MultiSceneModal.Back>
				<Button size="sm" onClick={() => show('second')}>
					Second scene
				</Button>
			</MultiSceneModal.Footer>
		</>
	);
};

const SecondScene = () => {
	const { back } = useMultiSceneModalContext();

	return (
		<>
			<MultiSceneModal.Content>Second scene</MultiSceneModal.Content>
			<MultiSceneModal.Footer>
				<MultiSceneModal.Back onClick={back}>Back</MultiSceneModal.Back>
			</MultiSceneModal.Footer>
		</>
	);
};

const scenes = {
	first: <FirstScene />,
	second: <SecondScene />,
};

type Scene = keyof typeof scenes;

const ExampleModal = () => {
	const { value, setTrue, setFalse } = useBoolean();

	return (
		<>
			<Button onClick={setTrue}>Open modal</Button>
			<MultiSceneModal
				root={<RootScene />}
				scenes={scenes}
				open={value}
				onClose={setFalse}
			>
				<MultiSceneModal.Scene />
			</MultiSceneModal>
		</>
	);
};

export const Default: Story = {
	render: () => <ExampleModal />,
};
