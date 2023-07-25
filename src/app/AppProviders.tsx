'use client';

import { SessionProvider } from '@/auth/providers/SessionProvider';
import { UIProvider } from '@/ui/providers/UIProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<SessionProvider>
		<UIProvider>{children}</UIProvider>
	</SessionProvider>
);
