import AuthBackground from '../assets/auth-background.svg';
import { PrivateRoute } from './PrivateRoute';

import type { ReactNode } from 'react';

type AuthLayoutProps = Readonly<{
	children: ReactNode;
}>;

export const AuthLayout = ({ children }: AuthLayoutProps) => (
	<PrivateRoute loggedIn={false}>
		<main className="z-10 flex flex-1 items-center justify-center">
			{children}
		</main>
		<AuthBackground
			preserveAspectRatio="xMinYMin slice"
			className="fixed left-0 top-0 h-full w-full"
		/>
	</PrivateRoute>
);
