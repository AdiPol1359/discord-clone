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
		className="w-full max-w-lg animate-auth rounded-md bg-background-mobile-primary p-8 shadow-md"
	>
		<hgroup className="text-center">
			<h1 className="text-2xl font-semibold text-header-primary">{title}</h1>
			{subtitle && <p className="text-header-secondary">{subtitle}</p>}
		</hgroup>
		<div className="mt-6 space-y-4">{children}</div>
	</form>
);
