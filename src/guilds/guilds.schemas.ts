import { z } from 'zod';

import {
	GUILD_LINK_EMPTY_ERROR_MESSAGE,
	GUILD_LINK_INVALID_ERROR_MESSAGE,
	GUILD_LINK_LENGTH,
	GUILD_NAME_MAX_LENGTH,
	GUILD_NAME_MAX_LENGTH_ERROR_MESSAGE,
	GUILD_NAME_MIN_LENGTH,
	GUILD_NAME_MIN_LENGTH_ERROR_MESSAGE,
} from './guilds.constants';

export const createGuildFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(GUILD_NAME_MIN_LENGTH, GUILD_NAME_MIN_LENGTH_ERROR_MESSAGE)
		.max(GUILD_NAME_MAX_LENGTH, GUILD_NAME_MAX_LENGTH_ERROR_MESSAGE),
});

export const joinGuildFormSchema = z.object({
	link: z.union([
		z
			.string()
			.nonempty(GUILD_LINK_EMPTY_ERROR_MESSAGE)
			.length(GUILD_LINK_LENGTH, GUILD_LINK_INVALID_ERROR_MESSAGE),
		z
			.string()
			.nonempty(GUILD_LINK_EMPTY_ERROR_MESSAGE)
			.url(GUILD_LINK_INVALID_ERROR_MESSAGE),
	]),
});
