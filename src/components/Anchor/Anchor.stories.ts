import { Anchor } from './Anchor';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Anchor',
	component: Anchor,
	args: {
		href: '#',
		children: 'Example',
	},
} satisfies Meta<typeof Anchor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
	args: {
		external: true,
		href: 'https://storybook.js.org/',
	},
};
