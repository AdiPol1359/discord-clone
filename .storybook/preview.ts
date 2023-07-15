import { withThemeByClassName } from '@storybook/addon-styling';

import type { Preview } from '@storybook/react';

import '../src/assets/styles/globals.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'dark',
		}),
	],
};

export default preview;
