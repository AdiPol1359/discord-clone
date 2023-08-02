import { NavigationItem } from './NavigationItem';

import AddIcon from '@/guilds/assets/add.svg';
import DiscordLogoIcon from '@/guilds/assets/discord-logo.svg';

export const UserGuildsNavigation = () => (
	<nav className="scrollbar-none h-full w-18 overflow-auto bg-background-tertiary pb-2 pt-3">
		<ul>
			<li>
				<NavigationItem type="link" href="/app" tooltip="Direct messages">
					<DiscordLogoIcon aria-hidden="true" />
				</NavigationItem>
			</li>
		</ul>
		<div
			role="separator"
			className="mx-auto my-2 h-0.5 w-8 rounded-sm bg-background-modifier-accent"
		/>
		<ul className="space-y-2">
			<li>
				<NavigationItem type="link" href="#" tooltip="Foo">
					F
				</NavigationItem>
			</li>
			<li>
				<NavigationItem type="link" href="#" tooltip="Bar">
					B
				</NavigationItem>
			</li>
			<li>
				<NavigationItem type="link" href="#" tooltip="Baz">
					B
				</NavigationItem>
			</li>
			<li>
				<NavigationItem type="button" tooltip="Add a server">
					<AddIcon aria-hidden="true" />
				</NavigationItem>
			</li>
		</ul>
	</nav>
);
