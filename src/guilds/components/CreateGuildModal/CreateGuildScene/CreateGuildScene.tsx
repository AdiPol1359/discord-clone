import { CreateGuildForm } from './CreateGuildForm/CreateGuildForm';

import { Anchor } from '@/ui/components/Anchor/Anchor';
import { Button } from '@/ui/components/Button/Button';
import { MultiSceneModal } from '@/ui/components/MultiSceneModal/MultiSceneModal';
import { useMultiSceneModalContext } from '@/ui/components/MultiSceneModal/MultiSceneModalProvider';

export const CreateGuildScene = () => {
	const { back } = useMultiSceneModalContext();

	return (
		<>
			<MultiSceneModal.Content>
				<MultiSceneModal.Title>Customize your server</MultiSceneModal.Title>
				<MultiSceneModal.Description>
					Give your new server a personality with a name and an icon. You can
					always change it later.
				</MultiSceneModal.Description>
				<CreateGuildForm />
				<div className="mt-2 text-xs text-text-muted">
					By creating a server, you agree to Discord&apos;s{' '}
					<strong>
						<Anchor href="https://discord.com/guidelines" external>
							Community Guidelines
						</Anchor>
					</strong>
					.
				</div>
			</MultiSceneModal.Content>
			<MultiSceneModal.Footer>
				<MultiSceneModal.Back onClick={back}>Back</MultiSceneModal.Back>
				<Button type="submit" size="sm" form="create-guild">
					Create
				</Button>
			</MultiSceneModal.Footer>
		</>
	);
};
