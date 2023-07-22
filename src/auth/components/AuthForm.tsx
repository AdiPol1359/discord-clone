import DiscordLogo from '../assets/discord-logo.svg';

import type { ReactNode } from 'react';

type AuthFormProps = Readonly<{
	title: string;
	subtitle?: string;
	onSubmit?: () => void;
	children: ReactNode;
}>;

export const AuthForm = ({
	title,
	subtitle,
	onSubmit,
	children,
}: AuthFormProps) => (
	<form
		onSubmit={onSubmit}
		className="h-full w-full bg-background-mobile-primary px-4 py-5 sm:h-fit sm:max-w-lg sm:animate-auth sm:rounded-md sm:p-8 sm:shadow-md"
	>
		<DiscordLogo className="mx-auto mb-5 sm:hidden" />
		<hgroup className="text-center">
			<h1 className="text-2xl font-semibold text-header-primary">{title}</h1>
			{subtitle && <p className="text-header-secondary">{subtitle}</p>}
		</hgroup>
		<div className="mt-6 space-y-4">{children}</div>
	</form>
);
