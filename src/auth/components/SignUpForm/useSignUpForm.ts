import { signUpFormSchema } from '@/auth/auth.schemas';
import { useZodForm } from '@/hooks/useZodForm';

export const useSignUpForm = () => {
	const { handleSubmit, ...rest } = useZodForm(signUpFormSchema, {
		defaultValues: { day: '', month: '', year: '' },
	});

	const handleFormSubmit = handleSubmit((data) => {
		console.log('SIGN UP:', data);
	});

	return { handleFormSubmit, ...rest };
};
