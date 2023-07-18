import { Input } from './Input';

import ArrowDown from '@/assets/svg/arrow-down.svg';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Input',
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placeholder: Story = {
	args: {
		placeholder: 'Example placeholder',
	},
};

export const Icon: Story = {
	args: {
		icon: <ArrowDown />,
	},
};
