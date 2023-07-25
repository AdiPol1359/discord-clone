'use client';

import { AuthForm } from '../AuthForm';
import { useSignInForm } from './useSignInForm';

import { Anchor } from '@/ui/components/Anchor/Anchor';
import { LoadingButton } from '@/ui/components/LoadingButton/LoadingButton';
import { TextField } from '@/ui/components/TextField/TextField';

export const SignInForm = () => {
	const {
		isLoading,
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
			<LoadingButton type="submit" loading={isLoading} fill>
				Log In
			</LoadingButton>
			<div className="text-sm text-text-muted">
				Need an account? <Anchor href="/register">Register</Anchor>
			</div>
		</AuthForm>
	);
};
