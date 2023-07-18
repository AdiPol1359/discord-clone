import { TextField } from './TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'TextField',
	component: TextField,
	args: {
		label: 'Example label',
	},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const Error: Story = {
	args: {
		error: 'Example error.',
	},
};
