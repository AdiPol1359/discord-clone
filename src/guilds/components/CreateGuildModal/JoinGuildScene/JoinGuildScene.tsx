import { JoinGuildForm } from './JoinGuildForm/JoinGuildForm';

import { Button } from '@/ui/components/Button/Button';
import { FormTitle } from '@/ui/components/FormTitle/FormTitle';
import { MultiSceneModal } from '@/ui/components/MultiSceneModal/MultiSceneModal';
import { useMultiSceneModalContext } from '@/ui/components/MultiSceneModal/MultiSceneModalProvider';

export const JoinGuildScene = () => {
	const { back } = useMultiSceneModalContext();

	return (
		<>
			<MultiSceneModal.Content>
				<MultiSceneModal.Title>Join a Server</MultiSceneModal.Title>
				<MultiSceneModal.Description>
					Enter an invite below to join an existing server
				</MultiSceneModal.Description>
				<JoinGuildForm />
				<div className="mt-4 text-sm text-header-primary">
					<FormTitle as="h3">Invites should look like</FormTitle>
					<p className="mt-2">hTKzmak</p>
					<p>https://discord.gg/hTKzmak</p>
					<p>https://discord.gg/cool-people</p>
				</div>
			</MultiSceneModal.Content>
			<MultiSceneModal.Footer>
				<MultiSceneModal.Back onClick={back}>Back</MultiSceneModal.Back>
				<Button type="submit" size="sm" form="join-guild">
					Join server
				</Button>
			</MultiSceneModal.Footer>
		</>
	);
};
