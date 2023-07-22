/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			resourceQuery: { not: /url/ },
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

		return config;
	},
	redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
