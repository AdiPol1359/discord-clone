'use client';

import { Controller } from 'react-hook-form';

import { AuthForm } from '../AuthForm';
import { useSignUpForm } from './useSignUpForm';

import { generateCalendar } from '@/auth/auth.utils';
import { Anchor } from '@/ui/components/Anchor/Anchor';
import { Autocomplete } from '@/ui/components/Autocomplete/Autocomplete';
import { Checkbox } from '@/ui/components/Checkbox/Checkbox';
import { ControlsGroup } from '@/ui/components/ControlsGroup/ControlsGroup';
import { LoadingButton } from '@/ui/components/LoadingButton/LoadingButton';
import { TextField } from '@/ui/components/TextField/TextField';

const { days, months, years } = generateCalendar();

export const SignUpForm = () => {
	const {
		isLoading,
		handleFormSubmit,
		control,
		register,
		formState: { errors },
	} = useSignUpForm();

	return (
		<AuthForm title="Create an account" onSubmit={handleFormSubmit}>
			<TextField
				testId="email"
				type="email"
				label="Email"
				autoComplete={false}
				spellCheck={false}
				error={errors.email?.message}
				required
				{...register('email')}
			/>
			<TextField
				testId="username"
				label="Username"
				autoComplete={false}
				spellCheck={false}
				error={errors.username?.message}
				required
				{...register('username')}
			/>
			<TextField
				testId="password"
				type="password"
				label="Password"
				error={errors.password?.message}
				required
				{...register('password')}
			/>
			<ControlsGroup label="Date of birth">
				<Controller
					name="day"
					control={control}
					render={({ field }) => (
						<Autocomplete
							testId="day"
							placeholder="Day"
							data={days}
							{...field}
						/>
					)}
				/>
				<Controller
					name="month"
					control={control}
					render={({ field }) => (
						<Autocomplete
							testId="month"
							placeholder="Month"
							data={months}
							{...field}
						/>
					)}
				/>
				<Controller
					name="year"
					control={control}
					render={({ field }) => (
						<Autocomplete
							testId="year"
							placeholder="Year"
							data={years}
							{...field}
						/>
					)}
				/>
			</ControlsGroup>
			<LoadingButton type="submit" loading={isLoading} fill>
				Continue
			</LoadingButton>
			<Checkbox
				testId="rules"
				label={
					<div>
						I have read and agree to Discord&apos;s{' '}
						<Anchor href="https://discord.com/terms" external>
							Terms of Service
						</Anchor>{' '}
						and{' '}
						<Anchor href="https://discord.com/privacy" external>
							Privacy Policy
						</Anchor>
						.
					</div>
				}
				{...register('acceptRules')}
			/>
			<div className="text-sm">
				<Anchor href="/login">Already have an account?</Anchor>
			</div>
		</AuthForm>
	);
};
