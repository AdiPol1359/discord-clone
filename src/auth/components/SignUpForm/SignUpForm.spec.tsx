import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpForm } from './SignUpForm';

describe('SignUpForm', () => {
	const signUp = vi.hoisted(() => vi.fn());

	vi.mock('@/auth/auth.service', () => ({
		signUp,
	}));

	it('should submit the registration form after successful validation', async () => {
		render(<SignUpForm />);

		const emailInput = screen.getByLabelText('Email');
		const usernameInput = screen.getByLabelText('Username');
		const passwordInput = screen.getByLabelText('Password');

		await userEvent.click(emailInput);
		await userEvent.keyboard('foo');

		await userEvent.click(usernameInput);
		await userEvent.keyboard('f');

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
			screen.getByText('Must be between 2 and 32 in length', { exact: false }),
		).toBeInTheDocument();
		expect(
			screen.getByText('Must be at least 8 characters long', { exact: false }),
		).toBeInTheDocument();

		await userEvent.click(emailInput);
		await userEvent.keyboard('@gmail.com');

		await userEvent.click(usernameInput);
		await userEvent.keyboard('foo');

		await userEvent.click(passwordInput);
		await userEvent.keyboard('{b>72}{Enter}');

		expect(
			screen.getByText('Must be 72 or fewer in length', { exact: false }),
		).toBeInTheDocument();

		await userEvent.click(passwordInput);
		await userEvent.keyboard('{Backspace>65}{Enter}');

		expect(signUp).toHaveBeenCalledTimes(0);

		await userEvent.click(screen.getByPlaceholderText('Day'));
		await userEvent.keyboard('1{Enter}');

		await userEvent.click(screen.getByPlaceholderText('Month'));
		await userEvent.keyboard('January{Enter}');

		await userEvent.click(screen.getByPlaceholderText('Year'));
		await userEvent.keyboard('2000{Enter}');

		await userEvent.click(
			screen.getByLabelText(
				"I have read and agree to Discord's Terms of Service and Privacy Policy.",
			),
		);

		await userEvent.click(screen.getByText('Continue'));

		expect(signUp).toHaveBeenCalledTimes(1);
	});
});
