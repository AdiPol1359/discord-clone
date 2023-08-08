import { useEffect, useState } from 'react';

import { getUserProfile } from '../auth.service';

import { supabase } from '@/lib/supabase';
import { createSafeContext } from '@/utils/context';

import type { Session } from '../auth.types';
import type { ReactNode } from 'react';

interface SessionContextValue {
	readonly session?: Session | null;
	readonly isLoading: boolean;
}

const [SessionContextProvider, useSessionContext] =
	createSafeContext<SessionContextValue>();

const SessionProvider = ({ children }: { readonly children: ReactNode }) => {
	const [session, setSession] = useState<Session | null | undefined>();

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
			const profile = await getUserProfile();

			setSession(
				session &&
					profile && {
						...session,
						profile: {
							username: profile.username,
							bornAt: new Date(profile.born_at),
						},
					},
			);
		});

		return () => {
			data.subscription.unsubscribe();
		};
	}, []);

	return (
		<SessionContextProvider
			value={{ session, isLoading: session === undefined }}
		>
			{children}
		</SessionContextProvider>
	);
};

export { SessionProvider, useSessionContext };
