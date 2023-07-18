import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type AnchorProps<T> = Readonly<{
	href: LinkProps<T>['href'];
	children: ReactNode;
}>;

export const Anchor = <T,>({ href, children }: AnchorProps<T>) => (
	<Link href={href} className="font-medium text-text-link hover:underline">
		{children}
	</Link>
);
