import { CreateGuildScene } from './CreateGuildScene/CreateGuildScene';
import { JoinGuildScene } from './JoinGuildScene/JoinGuildScene';
import { RootScene } from './RootScene/RootScene';

import { MultiSceneModal } from '@/ui/components/MultiSceneModal/MultiSceneModal';

import type { ComponentProps } from 'react';

export type CreateGuildModalScene = keyof typeof scenes;

const scenes = {
	createGuild: <CreateGuildScene />,
	joinGuild: <JoinGuildScene />,
};

export const CreateGuildModal = (
	props: Omit<ComponentProps<typeof MultiSceneModal>, 'root' | 'scenes'>,
) => (
	<MultiSceneModal root={<RootScene />} scenes={scenes} {...props}>
		<MultiSceneModal.Scene />
	</MultiSceneModal>
);
