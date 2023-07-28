import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import type { SharedComponentProps } from '@/ui/ui.types';

type SharedAnchorProps = Readonly<{
	children: ReactNode;
}> &
	SharedComponentProps;

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

const STYLES = 'font-medium text-text-link hover:underline focus:outline-0';

export const Anchor = <T,>({
	external,
	href,
	testId,
	children,
}: AnchorProps<T>) => {
	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				data-test={testId}
				className={STYLES}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} data-test={testId} className={STYLES}>
			{children}
		</Link>
	);
};
