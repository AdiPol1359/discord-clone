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
				'modal-content-show': 'modalContentShow 0.15s',
				'modal-content-hide': 'modalContentHide 0.15s',
				'modal-overlay-show': 'modalOverlayShow 0.2s',
				'modal-overlay-hide': 'modalOverlayHide 0.2s',
			},
			colors: {
				background: {
					floating: 'var(--background-floating)',
					primary: 'var(--background-primary)',
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)',
				},
				'background-mobile': {
					primary: 'var(--background-mobile-primary)',
				},
				'background-modifier': {
					accent: 'var(--background-modifier-accent)',
					active: 'var(--background-modifier-active)',
					hover: 'var(--background-modifier-hover)',
					selected: 'var(--background-modifier-selected)',
				},
				black: {
					500: 'var(--black-500)',
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
				'button-secondary-background': {
					DEFAULT: 'var(--button-secondary-background)',
					active: 'var(--button-secondary-background-active)',
					hover: 'var(--button-secondary-background-hover)',
				},
				green: {
					360: 'var(--green-360)',
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
				modal: {
					background: 'var(--modal-background)',
					'footer-background': 'var(--modal-footer-background)',
				},
				primary: {
					100: 'var(--primary-100)',
					130: 'var(--primary-130)',
					200: 'var(--primary-200)',
					230: 'var(--primary-230)',
					330: 'var(--primary-330)',
					360: 'var(--primary-360)',
					400: 'var(--primary-400)',
					430: 'var(--primary-430)',
					460: 'var(--primary-460)',
					500: 'var(--primary-500)',
					530: 'var(--primary-530)',
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
				modalContentShow: {
					from: { opacity: '0', transform: 'translate(-50%, -50%) scale(0.7)' },
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
				},
				modalContentHide: {
					from: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
					to: { opacity: '0', transform: 'translate(-50%, -50%) scale(0.8)' },
				},
				modalOverlayShow: {
					from: { opacity: '0' },
					to: { opacity: '0.85' },
				},
				modalOverlayHide: {
					from: { opacity: '0.85' },
					to: { opacity: '0' },
				},
			},
			opacity: {
				'85': '0.85',
			},
			spacing: {
				'9.5': '2.375rem',
				'18': '4.5rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
