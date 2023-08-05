'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { LinkProps } from 'next/link';
import type { Ref } from 'react';

type ActiveLinkInnerProps<T> = Readonly<{
	activeClassName?: string;
}> &
	LinkProps<T>;

const ActiveLinkInner = <T,>(
	{ activeClassName, className, href, ...props }: ActiveLinkInnerProps<T>,
	ref: Ref<HTMLAnchorElement>,
) => {
	const pathname = usePathname();
	const isActive = pathname === href.toString();

	return (
		<Link
			ref={ref}
			href={href}
			className={twMerge(className, isActive && activeClassName)}
			{...props}
		/>
	);
};

export const ActiveLink = forwardRef(ActiveLinkInner) as <T>(
	props: ActiveLinkInnerProps<T>,
	ref: Ref<HTMLAnchorElement>,
) => ReturnType<typeof ActiveLinkInner>;
