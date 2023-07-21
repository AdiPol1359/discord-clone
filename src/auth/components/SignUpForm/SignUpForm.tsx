'use client';

import { Controller } from 'react-hook-form';

import { AuthForm } from '../AuthForm';
import { useSignUpForm } from './useSignUpForm';

import { generateCalendar } from '@/auth/auth.utils';
import { Anchor } from '@/components/Anchor/Anchor';
import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { ControlsGroup } from '@/components/ControlsGroup/ControlsGroup';
import { TextField } from '@/components/TextField/TextField';

const { days, months, years } = generateCalendar();

export const SignUpForm = () => {
	const {
		handleFormSubmit,
		control,
		register,
		formState: { errors },
	} = useSignUpForm();

	return (
		<AuthForm title="Create an account" onSubmit={handleFormSubmit}>
			<TextField
				label="Email"
				type="email"
				autoComplete={false}
				spellCheck={false}
				error={errors.email?.message}
				required
				{...register('email')}
			/>
			<TextField
				label="Username"
				autoComplete={false}
				spellCheck={false}
				error={errors.username?.message}
				required
				{...register('username')}
			/>
			<TextField
				label="Password"
				type="password"
				error={errors.password?.message}
				required
				{...register('password')}
			/>
			<ControlsGroup label="Date of birth">
				<Controller
					name="day"
					control={control}
					render={({ field }) => (
						<Autocomplete placeholder="Day" data={days} {...field} />
					)}
				/>
				<Controller
					name="month"
					control={control}
					render={({ field }) => (
						<Autocomplete placeholder="Month" data={months} {...field} />
					)}
				/>
				<Controller
					name="year"
					control={control}
					render={({ field }) => (
						<Autocomplete placeholder="Year" data={years} {...field} />
					)}
				/>
			</ControlsGroup>
			<Button type="submit" fill>
				Continue
			</Button>
			<Checkbox
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
