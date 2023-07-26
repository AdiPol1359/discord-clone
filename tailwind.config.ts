import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: ['class', '.theme-dark'],
	theme: {
		extend: {
			animation: {
				auth: 'auth 0.25s',
				loading: 'loading 1.4s ease-in-out infinite',
			},
			colors: {
				background: {
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)',
				},
				'background-mobile': {
					primary: 'var(--background-mobile-primary)',
				},
				'background-modifier': {
					hover: 'var(--background-modifier-hover)',
					selected: 'var(--background-modifier-selected)',
				},
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
					primary: 'var(--header-primary)',
					secondary: 'var(--header-secondary)',
				},
				input: {
					background: 'var(--input-background)',
				},
				interactive: {
					active: 'var(--interactive-active)',
					hover: 'var(--interactive-hover)',
					normal: 'var(--interactive-normal)',
				},
				primary: {
					100: 'var(--primary-100)',
					130: 'var(--primary-130)',
					200: 'var(--primary-200)',
					230: 'var(--primary-230)',
					330: 'var(--primary-330)',
					360: 'var(--primary-360)',
					400: 'var(--primary-400)',
					460: 'var(--primary-460)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					630: 'var(--primary-630)',
					700: 'var(--primary-700)',
					730: 'var(--primary-730)',
					860: 'var(--primary-860)',
				},
				red: {
					345: 'var(--red-345)',
					400: 'var(--red-400)',
					430: 'var(--red-430)',
					500: 'var(--red-500)',
				},
				'scrollbar-thin': {
					thumb: 'var(--scrollbar-thin-thumb)',
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
			keyframes: {
				auth: {
					'0%': { opacity: '0', scale: '1.07', transform: 'translateY(-75px)' },
				},
				loading: {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.3', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
