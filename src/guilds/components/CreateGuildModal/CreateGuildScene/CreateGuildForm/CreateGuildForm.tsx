import { useCreateGuildForm } from './useCreateGuildForm';

import { TextField } from '@/ui/components/TextField/TextField';

export const CreateGuildForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useCreateGuildForm();

	return (
		<form id="create-guild" onSubmit={handleFormSubmit} className="mt-6">
			<TextField
				label="Server Name"
				error={errors.name?.message}
				autoComplete={false}
				spellCheck={false}
				required
				{...register('name')}
			/>
		</form>
	);
};
