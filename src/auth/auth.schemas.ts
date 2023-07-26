import { z } from 'zod';

import {
	EMAIL_ERROR_MESSAGE,
	EMPTY_FIELD_ERROR_MESSAGE,
	PASSWORD_MAX_LENGTH,
	PASSWORD_MAX_LENGTH_ERROR_MESSAGE,
	PASSWORD_MIN_LENGTH,
	PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
	USERNAME_ERROR_MESSAGE,
	USERNAME_MAX_LENGTH,
	USERNAME_MIN_LENGTH,
} from './auth.constants';

export const signInFormSchema = z.object({
	email: z
		.string()
		.nonempty(EMPTY_FIELD_ERROR_MESSAGE)
		.email(EMAIL_ERROR_MESSAGE),
	password: z
		.string()
		.nonempty(EMPTY_FIELD_ERROR_MESSAGE)
		.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
		.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR_MESSAGE),
});

export const signUpFormSchema = z.object({
	email: z
		.string()
		.nonempty(EMPTY_FIELD_ERROR_MESSAGE)
		.email(EMAIL_ERROR_MESSAGE),
	username: z
		.string()
		.trim()
		.nonempty(EMPTY_FIELD_ERROR_MESSAGE)
		.min(USERNAME_MIN_LENGTH, USERNAME_ERROR_MESSAGE)
		.max(USERNAME_MAX_LENGTH, USERNAME_ERROR_MESSAGE),
	password: z
		.string()
		.nonempty(EMPTY_FIELD_ERROR_MESSAGE)
		.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
		.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR_MESSAGE),
	day: z.string().trim().nonempty(),
	month: z.string().trim().nonempty(),
	year: z.string().trim().nonempty(),
	acceptRules: z.literal(true),
});
