import { signUpFormSchema } from '@/auth/auth.schemas';
import { signUp } from '@/auth/auth.service';
import { useBoolean } from '@/hooks/useBoolean';
import { useZodForm } from '@/hooks/useZodForm';
import { capitalize } from '@/utils/string';

export const useSignUpForm = () => {
	const { value: isLoading, setTrue, setFalse } = useBoolean();
	const { handleSubmit, setError, reset, ...rest } = useZodForm(
		signUpFormSchema,
		{
			defaultValues: { day: '', month: '', year: '' },
		},
	);

	const handleFormSubmit = handleSubmit(
		async ({ username, email, password, day, month, year }) => {
			setTrue();
			await signUp(
				{
					username,
					email,
					password,
					bornAt: new Date(`${day} ${month}, ${year}`),
				},
				{
					onSuccess: () => {
						reset();
					},
					onAlreadyExists: (target) => {
						setError(target, {
							message: `${capitalize(target)} is already registered`,
						});
					},
				},
			);
			setFalse();
		},
	);

	return { isLoading, handleFormSubmit, ...rest };
};
