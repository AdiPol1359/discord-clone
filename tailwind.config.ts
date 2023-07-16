import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blue: {
					345: 'var(--blue-345)',
					430: 'var(--blue-430)',
				},
				brand: {
					400: 'var(--brand-400)',
					500: 'var(--brand-500)',
					600: 'var(--brand-600)',
				},
				'brand-experiment': {
					DEFAULT: 'var(--brand-experiment)',
					400: 'var(--brand-experiment-400)',
					500: 'var(--brand-experiment-500)',
					560: 'var(--brand-experiment-560)',
					600: 'var(--brand-experiment-600)',
				},
				header: {
					secondary: 'var(--header-secondary)',
				},
				input: {
					background: 'var(--input-background)',
				},
				primary: {
					200: 'var(--primary-200)',
					230: 'var(--primary-230)',
					330: 'var(--primary-330)',
					360: 'var(--primary-360)',
					400: 'var(--primary-400)',
					460: 'var(--primary-460)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
				},
				red: {
					345: 'var(--red-345)',
					400: 'var(--red-400)',
					430: 'var(--red-430)',
					500: 'var(--red-500)',
				},
				status: {
					danger: 'var(--status-danger)',
				},
				text: {
					danger: 'var(--text-danger)',
					link: 'var(--text-link)',
					muted: 'var(--text-muted)',
					normal: 'var(--text-normal)',
				},
				white: {
					500: 'var(--white-500)',
				},
			},
			fontFamily: {
				sans: ['var(--font-gg-sans)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config;
