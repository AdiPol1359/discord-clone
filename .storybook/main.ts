import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: (config) => {
		const rule = config.module?.rules?.find(
			(rule) =>
				typeof rule === 'object' &&
				rule?.test instanceof RegExp &&
				rule.test.test('.svg'),
		);

		if (rule && typeof rule !== 'string') {
			rule.exclude = /\.svg$/;
		}

		config.module?.rules?.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
							],
						},
					},
				},
			],
		});

		if (config.resolve) {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}

		return config;
	},
};

export default config;
