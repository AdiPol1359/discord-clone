'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useSessionContext } from '../providers/SessionProvider';

import type { ReactNode } from 'react';

type PrivateRouteProps = Readonly<{
	loggedIn?: boolean;
	children: ReactNode;
}>;

const LOGIN_ROUTE = '/login';
const APPLICATION_ROUTE = '/app';

export const PrivateRoute = ({
	loggedIn = true,
	children,
}: PrivateRouteProps) => {
	const { replace } = useRouter();
	const { isLoading, session } = useSessionContext();

	useEffect(() => {
		if (!isLoading && Boolean(session) !== loggedIn) {
			replace(loggedIn ? LOGIN_ROUTE : APPLICATION_ROUTE);
		}
	}, [loggedIn, isLoading, session, replace]);

	if (Boolean(session) !== loggedIn) {
		return null;
	}

	return <>{children}</>;
};
