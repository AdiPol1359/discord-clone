import { FormTitle } from './FormTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'FormTitle',
	component: FormTitle,
	args: {
		as: 'h2',
		children: 'Example title',
	},
} satisfies Meta<typeof FormTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
	args: {
		error: true,
	},
};
