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

export const Primary: Story = {
	args: {
		color: 'primary',
	},
};

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

export const ExtraSmall: Story = {
	args: {
		size: 'xs',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
	},
};

export const Medium: Story = {
	args: {
		size: 'md',
	},
};
