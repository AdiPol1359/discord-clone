'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SessionProvider } from '@/auth/providers/SessionProvider';
import { UIProvider } from '@/ui/providers/UIProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const AppProviders = ({ children }: AppProvidersProps) => (
	<QueryClientProvider client={queryClient}>
		<SessionProvider>
			<UIProvider>{children}</UIProvider>
		</SessionProvider>
		<ReactQueryDevtools />
	</QueryClientProvider>
);
