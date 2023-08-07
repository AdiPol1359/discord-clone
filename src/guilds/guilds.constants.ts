export const GUILD_NAME_MIN_LENGTH = 2;
export const GUILD_NAME_MAX_LENGTH = 100;
export const GUILD_INVITATION_LENGTH = 10;

export const GUILD_NAME_MIN_LENGTH_ERROR_MESSAGE = `Must be between ${GUILD_NAME_MIN_LENGTH} and ${GUILD_NAME_MAX_LENGTH} in length.`;
export const GUILD_NAME_MAX_LENGTH_ERROR_MESSAGE = `Must be ${GUILD_NAME_MAX_LENGTH} characters or fewer in length.`;

export const GUILD_INVITATION_EMPTY_ERROR_MESSAGE =
	'Please enter a valid invite link or invite code.';
export const GUILD_INVITATION_INVALID_ERROR_MESSAGE =
	'The invite is invalid or has expired.';
