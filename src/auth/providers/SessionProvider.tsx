import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';
import { createSafeContext } from '@/utils/context';

import type { Session } from '@supabase/auth-helpers-nextjs';
import type { ReactNode } from 'react';

interface SessionContextValue {
	readonly session?: Session | null;
	readonly isLoading: boolean;
}

const [SessionContextProvider, useSessionContext] =
	createSafeContext<SessionContextValue>();

const SUPABASE_EVENTS = ['INITIAL_SESSION', 'SIGNED_IN', 'SIGNED_OUT'];

const SessionProvider = ({ children }: { readonly children: ReactNode }) => {
	const [session, setSession] = useState<Session | null | undefined>();

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			if (SUPABASE_EVENTS.includes(event)) {
				setSession(session);
			}
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
