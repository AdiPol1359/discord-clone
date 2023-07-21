export const generateDays = () =>
	Array.from({ length: 31 }).map((_, i) => String(i + 1));

export const generateYears = () =>
	Array.from({ length: 150 }).map((_, i) =>
		String(new Date().getFullYear() - i),
	);

export const generateMonths = () => {
	const date = new Date();
	const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long' });

	return Array.from({ length: 12 }).map((_, i) =>
		dateFormat.format(new Date(date.getFullYear(), i)),
	);
};

export const generateCalendar = () => ({
	days: generateDays(),
	months: generateMonths(),
	years: generateYears(),
});
