import { PrivateRoute } from '@/auth/components/PrivateRoute';
import { UserGuildsNavigation } from '@/guilds/components/UserGuildsNavigation/UserGuildsNavigation';

import type { ReactNode } from 'react';

export default function DiscordLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<PrivateRoute>
			<div className="theme-dark flex h-full">
				<UserGuildsNavigation />
				{children}
			</div>
		</PrivateRoute>
	);
}
