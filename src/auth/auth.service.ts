import { supabase } from '@/lib/supabase';

const INVALID_CREDENTIALS_ERROR_MESSAGE = 'Invalid login credentials';
const EMAIL_ERROR_MESSAGE = 'User already registered';
const USERNAME_ERROR_MESSAGE =
	'duplicate key value violates unique constraint "profile_username_key"';

export const signIn = async (
	{ email, password }: { email: string; password: string },
	{ onInvalidCredentials }: { onInvalidCredentials?: () => void } = {},
) => {
	const { error } = await supabase.auth.signInWithPassword({ email, password });

	if (error?.message === INVALID_CREDENTIALS_ERROR_MESSAGE) {
		onInvalidCredentials?.();
	}
};

export const signUp = async (
	{
		username,
		email,
		password,
		bornAt,
	}: {
		username: string;
		email: string;
		password: string;
		bornAt: Date;
	},
	{
		onAlreadyExists,
	}: { onAlreadyExists?: (target: 'email' | 'username') => void } = {},
) => {
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: { data: { username, bornAt } },
	});
	const { message } = error || {};

	const target =
		message === EMAIL_ERROR_MESSAGE
			? 'email'
			: message === USERNAME_ERROR_MESSAGE
			? 'username'
			: null;

	if (target) {
		onAlreadyExists?.(target);
	}
};

export const getUserProfile = async () => {
	const { data } = await supabase
		.from('profile')
		.select('username, born_at')
		.single();

	return data;
};
