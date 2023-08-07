'use client';

import { CreateGuildModal } from '../CreateGuildModal/CreateGuildModal';
import { UserGuildsNavigationItem } from './UserGuildsNavigationItem';

import AddIcon from '@/guilds/assets/add.svg';
import { useBoolean } from '@/hooks/useBoolean';

export const CreateGuildNavigationItem = () => {
	const { value, setTrue, setFalse } = useBoolean();

	return (
		<>
			<UserGuildsNavigationItem
				type="button"
				tooltip="Add a server"
				onClick={setTrue}
			>
				<AddIcon aria-hidden="true" />
			</UserGuildsNavigationItem>
			<CreateGuildModal open={value} onClose={setFalse} />
		</>
	);
};
