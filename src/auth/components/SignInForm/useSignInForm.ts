import { signInFormSchema } from '@/auth/auth.schemas';
import { useZodForm } from '@/hooks/useZodForm';

export const useSignInForm = () => {
	const { handleSubmit, ...rest } = useZodForm(signInFormSchema);

	const handleFormSubmit = handleSubmit((data) => {
		console.log('SIGN IN:', data);
	});

	return { handleFormSubmit, ...rest };
};
