module.exports = {
	'*.{ts,tsx,css,json}': ['pnpm prettier --write'],
	'*.{ts,tsx}': [() => 'pnpm lint:fix'],
};
