import { useState } from 'react';

import { Autocomplete } from './Autocomplete';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Autocomplete',
	component: Autocomplete,
	args: {
		data: [],
		value: '',
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleAutocomplete = () => {
	const [value, setValue] = useState('');

	return (
		<Autocomplete
			placeholder="Example autocomplete"
			data={['1', '11', '111']}
			value={value}
			setValue={setValue}
		/>
	);
};

export const Default: Story = {
	render: () => <ExampleAutocomplete />,
};
