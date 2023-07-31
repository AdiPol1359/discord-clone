import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignInForm } from './SignInForm';

describe('SignInForm', () => {
	const signIn = vi.hoisted(() => vi.fn());

	vi.mock('@/auth/auth.service', () => ({
		signIn,
	}));

	it('should submit login form after successful validation', async () => {
		render(<SignInForm />);

		const emailInput = screen.getByLabelText('Email or Phone Number');
		const passwordInput = screen.getByLabelText('Password');

		await userEvent.click(emailInput);
		await userEvent.keyboard('foo');

		await userEvent.click(passwordInput);
		await userEvent.keyboard('foo{Enter}');

		expect(emailInput).toBeInvalid();

		await userEvent.click(emailInput);
		await userEvent.keyboard('@gmail.com{Enter}');

		expect(emailInput).toBeValid();

		await userEvent.click(emailInput);
		await userEvent.keyboard('{Backspace>10}');

		expect(
			screen.getByText('Not a well formed email address', { exact: false }),
		).toBeInTheDocument();
		expect(
			screen.getByText('Must be at least 8 characters long', { exact: false }),
		).toBeInTheDocument();

		await userEvent.click(emailInput);
		await userEvent.keyboard('@gmail.com');

		await userEvent.click(passwordInput);
		await userEvent.keyboard('{b>72}{Enter}');

		expect(
			screen.getByText('Must be 72 or fewer in length', { exact: false }),
		).toBeInTheDocument();

		await userEvent.click(passwordInput);
		await userEvent.keyboard('{Backspace>65}{Enter}');

		expect(signIn).toHaveBeenCalledTimes(1);
	});
});
