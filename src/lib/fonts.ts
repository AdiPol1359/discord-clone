import localFont from 'next/font/local';

export const ggSans = localFont({
	variable: '--font-gg-sans',
	src: [
		{
			path: '../assets/fonts/ggsans-Normal.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/ggsans-NormalItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../assets/fonts/ggsans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/ggsans-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../assets/fonts/ggsans-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/ggsans-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../assets/fonts/ggsans-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/ggsans-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../assets/fonts/ggsans-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../assets/fonts/ggsans-ExtraBoldItalic.woff2',
			weight: '800',
			style: 'italic',
		},
	],
});
