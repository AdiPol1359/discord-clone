import { signInFormSchema } from '@/auth/auth.schemas';
import { signIn } from '@/auth/auth.service';
import { useBoolean } from '@/hooks/useBoolean';
import { useZodForm } from '@/hooks/useZodForm';

export const useSignInForm = () => {
	const { value: isLoading, setTrue, setFalse } = useBoolean();
	const { handleSubmit, setError, ...rest } = useZodForm(signInFormSchema);

	const handleFormSubmit = handleSubmit(async ({ email, password }) => {
		setTrue();
		await signIn(
			{ email, password },
			{
				onInvalidCredentials: () => {
					(['email', 'password'] as const).forEach((name) =>
						setError(name, { message: 'Login or password is invalid.' }),
					);
				},
			},
		);
		setFalse();
	});

	return { isLoading, handleFormSubmit, ...rest };
};
