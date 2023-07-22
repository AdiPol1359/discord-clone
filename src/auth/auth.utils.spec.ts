import { generateDays, generateMonths, generateYears } from './auth.utils';

describe('auth utils', () => {
	it('should generate days', () => {
		expect(generateDays()).toHaveLength(31);
	});

	it('should generate years', () => {
		expect(generateYears()).toHaveLength(150);
	});

	it('should generate month names', () => {
		expect(generateMonths()).toEqual([
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]);
	});
});
