'use client';

import { twJoin } from 'tailwind-merge';

import { ActiveLink } from '@/components/ActiveLink';
import { Tooltip } from '@/ui/components/Tooltip/Tooltip';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

const variants: Record<UserGuildsNavigationItemType, string> = {
	link: 'text-text-normal hover:bg-brand-experiment',
	button: 'text-green-360 hover:bg-green-360',
};

const ITEM_STYLES =
	'mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-background-primary text-lg font-medium transition-all duration-200 hover:rounded-2xl hover:text-white-500 focus:outline-0';

type UserGuildsNavigationItemType =
	UserGuildsNavigationItemProps<unknown>['type'];

type SharedUserGuildsNavigationItemProps = Readonly<{
	tooltip: string;
	children: ReactNode;
}>;

type ButtonUserGuildsNavigationItemProps = Readonly<{
	type: 'button';
	onClick?: () => void;
}>;

type LinkUserGuildsNavigationItemProps<T> = Readonly<{
	type: 'link';
	href: LinkProps<T>['href'];
}>;

type UserGuildsNavigationItemProps<T> = SharedUserGuildsNavigationItemProps &
	(ButtonUserGuildsNavigationItemProps | LinkUserGuildsNavigationItemProps<T>);

export const UserGuildsNavigationItem = <T,>(
	props: UserGuildsNavigationItemProps<T>,
) => {
	const { type, tooltip, children } = props;

	const styles = twJoin(ITEM_STYLES, variants[type]);

	return (
		<div className="relative">
			<Tooltip>
				<Tooltip.Trigger>
					{type === 'button' ? (
						<button
							type="button"
							aria-label={tooltip}
							className={styles}
							onClick={props.onClick}
						>
							{children}
						</button>
					) : (
						<ActiveLink
							href={props.href}
							aria-label={tooltip}
							className={twJoin(
								styles,
								'before:absolute before:left-0 before:block before:h-5 before:w-1 before:scale-0 before:rounded-r before:bg-header-primary before:transition-transform before:duration-200 hover:before:scale-100',
							)}
							activeClassName="rounded-2xl bg-brand-experiment before:h-10 before:scale-100"
						>
							{children}
						</ActiveLink>
					)}
				</Tooltip.Trigger>
				<Tooltip.Content position="right">{tooltip}</Tooltip.Content>
			</Tooltip>
		</div>
	);
};
