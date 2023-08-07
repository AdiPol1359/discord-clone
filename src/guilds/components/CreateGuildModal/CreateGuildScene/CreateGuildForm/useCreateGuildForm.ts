import { createGuildFormSchema } from '@/guilds/guilds.schemas';
import { useZodForm } from '@/hooks/useZodForm';

export const useCreateGuildForm = () => {
	const { handleSubmit, ...rest } = useZodForm(createGuildFormSchema);

	const handleFormSubmit = handleSubmit(() => {
		console.log('create...');
	});

	return { handleFormSubmit, ...rest };
};
