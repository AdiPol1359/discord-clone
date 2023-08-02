import { UserGuildsNavigationItem } from './UserGuildsNavigationItem';

import AddIcon from '@/guilds/assets/add.svg';
import DiscordLogoIcon from '@/guilds/assets/discord-logo.svg';

export const UserGuildsNavigation = () => (
	<nav className="scrollbar-none h-full w-18 overflow-auto bg-background-tertiary pb-2 pt-3">
		<ul>
			<li>
				<UserGuildsNavigationItem
					type="link"
					href="/app"
					tooltip="Direct messages"
				>
					<DiscordLogoIcon aria-hidden="true" />
				</UserGuildsNavigationItem>
			</li>
		</ul>
		<div
			role="separator"
			className="mx-auto my-2 h-0.5 w-8 rounded-sm bg-background-modifier-accent"
		/>
		<ul className="space-y-2">
			<li>
				<UserGuildsNavigationItem type="link" href="#" tooltip="Foo">
					F
				</UserGuildsNavigationItem>
			</li>
			<li>
				<UserGuildsNavigationItem type="link" href="#" tooltip="Bar">
					B
				</UserGuildsNavigationItem>
			</li>
			<li>
				<UserGuildsNavigationItem type="link" href="#" tooltip="Baz">
					B
				</UserGuildsNavigationItem>
			</li>
			<li>
				<UserGuildsNavigationItem type="button" tooltip="Add a server">
					<AddIcon aria-hidden="true" />
				</UserGuildsNavigationItem>
			</li>
		</ul>
	</nav>
);
