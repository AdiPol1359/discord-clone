'use client';

import { AuthForm } from '../AuthForm';
import { useSignInForm } from './useSignInForm';

import { Anchor } from '@/components/Anchor/Anchor';
import { Button } from '@/components/Button/Button';
import { TextField } from '@/components/TextField/TextField';

export const SignInForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignInForm();

	return (
		<AuthForm
			title="Welcome back!"
			subtitle="We're so excited to see you again!"
			onSubmit={handleFormSubmit}
		>
			<TextField
				label="Email or Phone Number"
				type="email"
				autoComplete={false}
				spellCheck={false}
				error={errors?.email?.message}
				required
				{...register('email')}
			/>
			<TextField
				label="Password"
				type="password"
				error={errors?.password?.message}
				required
				{...register('password')}
			/>
			<Button type="submit" fill>
				Log In
			</Button>
			<div className="text-sm text-text-muted">
				Need an account? <Anchor href="/register">Register</Anchor>
			</div>
		</AuthForm>
	);
};
