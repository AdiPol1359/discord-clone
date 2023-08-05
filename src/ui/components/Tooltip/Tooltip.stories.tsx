import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';
import { TooltipProvider } from './TooltipProvider';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Tooltip',
	component: Tooltip,
	args: {
		children: null,
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleTooltip = () => (
	<TooltipProvider>
		<Tooltip>
			<Tooltip.Trigger>
				<Button>Example</Button>
			</Tooltip.Trigger>
			<Tooltip.Content position="bottom">Example Tooltip</Tooltip.Content>
		</Tooltip>
	</TooltipProvider>
);

export const Default: Story = {
	render: () => <ExampleTooltip />,
};
