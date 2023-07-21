import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type SharedAnchorProps = Readonly<{
	children: ReactNode;
}>;

type ExternalAnchorProps = Readonly<{
	external: true;
	href: string;
}>;

type InternalAnchorProps<T> = Readonly<{
	external?: false;
	href: LinkProps<T>['href'];
}>;

type AnchorProps<T> = SharedAnchorProps &
	(ExternalAnchorProps | InternalAnchorProps<T>);

const STYLES = 'font-medium text-text-link hover:underline';

export const Anchor = <T,>({ external, href, children }: AnchorProps<T>) => {
	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				className={STYLES}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={STYLES}>
			{children}
		</Link>
	);
};
