import { PrivateRoute } from '@/auth/components/PrivateRoute';

import type { ReactNode } from 'react';

export default function DiscordLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return <PrivateRoute>{children}</PrivateRoute>;
}
