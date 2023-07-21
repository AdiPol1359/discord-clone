import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UseFormProps } from 'react-hook-form';
import type { z } from 'zod';

export const useZodForm = <T extends z.ZodSchema>(
	schema: T,
	options: Omit<UseFormProps<z.infer<T>>, 'resolver'> = {},
) =>
	useForm<z.infer<T>>({
		...options,
		resolver: zodResolver(schema),
	});
