import { supabase } from '@/lib/supabase';

const EMAIL_ERROR_MESSAGE = 'User already registered';
const USERNAME_ERROR_MESSAGE =
	'duplicate key value violates unique constraint "profile_username_key"';

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
		onSuccess,
	}: {
		onAlreadyExists?: (target: 'email' | 'username') => void;
		onSuccess?: () => void;
	} = {},
) => {
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: { data: { username, bornAt } },
	});

	if (error) {
		const { message } = error;
		const target =
			message === EMAIL_ERROR_MESSAGE
				? 'email'
				: message === USERNAME_ERROR_MESSAGE
				? 'username'
				: null;

		if (target) {
			onAlreadyExists?.(target);
		}
	} else {
		onSuccess?.();
	}
};
