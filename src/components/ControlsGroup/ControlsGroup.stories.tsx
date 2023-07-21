import { Input } from '../Input/Input';
import { ControlsGroup } from './ControlsGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'ControlsGroup',
	component: ControlsGroup,
	args: {
		label: 'Example controls group',
		children: (
			<>
				<Input placeholder="foo" />
				<Input placeholder="bar" />
				<Input placeholder="baz" />
			</>
		),
	},
} satisfies Meta<typeof ControlsGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
