import { CreateGuildButton } from './CreateGuildButton';

import { Button } from '@/ui/components/Button/Button';
import { MultiSceneModal } from '@/ui/components/MultiSceneModal/MultiSceneModal';
import { useMultiSceneModalContext } from '@/ui/components/MultiSceneModal/MultiSceneModalProvider';

import type { CreateGuildModalScene } from '../CreateGuildModal';

export const RootScene = () => {
	const { show } = useMultiSceneModalContext<CreateGuildModalScene>();

	return (
		<>
			<MultiSceneModal.Content>
				<MultiSceneModal.Title>Create a server</MultiSceneModal.Title>
				<MultiSceneModal.Description>
					Your server is where you and your friends hang out. Make yours and
					start talking.
				</MultiSceneModal.Description>
				<CreateGuildButton onClick={() => show('createGuild')} />
			</MultiSceneModal.Content>
			<MultiSceneModal.Footer orientation="vertical">
				<h3 className="text-center text-xl font-semibold text-header-primary">
					Have an invite already?
				</h3>
				<Button
					color="primary"
					size="sm"
					onClick={() => show('joinGuild')}
					fill
				>
					Join a Server
				</Button>
			</MultiSceneModal.Footer>
		</>
	);
};
