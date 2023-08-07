import { useJoinGuildForm } from './useJoinGuildForm';

import { TextField } from '@/ui/components/TextField/TextField';

export const JoinGuildForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useJoinGuildForm();

	return (
		<form id="join-guild" onSubmit={handleFormSubmit} className="mt-6">
			<TextField
				label="Invite link"
				placeholder="https://discord.gg/hTKzmak"
				error={errors.invitation?.message}
				autoComplete={false}
				spellCheck={false}
				required
				{...register('invitation')}
			/>
		</form>
	);
};
