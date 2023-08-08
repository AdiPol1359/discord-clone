import { useSessionContext } from '@/auth/providers/SessionProvider';
import { createGuildFormSchema } from '@/guilds/guilds.schemas';
import { useZodForm } from '@/hooks/useZodForm';

export const useCreateGuildForm = () => {
	const { session } = useSessionContext();
	const { handleSubmit, ...rest } = useZodForm(createGuildFormSchema, {
		defaultValues: {
			...(session && { name: `${session.profile.username}'s server` }),
		},
	});

	const handleFormSubmit = handleSubmit(() => {
		console.log('create...');
	});

	return { handleFormSubmit, ...rest };
};
