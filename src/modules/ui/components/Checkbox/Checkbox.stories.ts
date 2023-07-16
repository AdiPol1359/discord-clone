import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Checkbox',
	component: Checkbox,
	args: {
		label: 'Example checkbox',
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Muted: Story = {
	args: {
		muted: true,
	},
};
