import { AppProviders } from './AppProviders';

import { ggSans } from '@/lib/fonts';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata: Metadata = {
	title: 'Discord | Your Place to Talk and Hang Out',
	description:
		'Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.',
};

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<html lang="en" className={ggSans.variable}>
			<body className="flex h-screen flex-col">
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}
