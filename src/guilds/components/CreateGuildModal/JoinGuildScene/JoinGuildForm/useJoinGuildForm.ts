import { joinGuildFormSchema } from '@/guilds/guilds.schemas';
import { useZodForm } from '@/hooks/useZodForm';

export const useJoinGuildForm = () => {
	const { handleSubmit, ...rest } = useZodForm(joinGuildFormSchema);

	const handleFormSubmit = handleSubmit(() => {
		console.log('join...');
	});

	return { handleFormSubmit, ...rest };
};
