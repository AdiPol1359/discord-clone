import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Fill: Story = {
	args: {
		fill: true,
	},
};

export const Primary: Story = {
	args: {
		color: 'primary',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
	},
};
