import { LoadingButton } from './LoadingButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'LoadingButton',
	component: LoadingButton,
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof LoadingButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		loading: false,
	},
};

export const Loading: Story = {
	args: {
		loading: true,
	},
};
