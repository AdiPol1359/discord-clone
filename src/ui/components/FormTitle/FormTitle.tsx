import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type SharedFormTitleProps = Readonly<{
	error?: boolean;
	children: ReactNode;
}>;

type GeneralFormTitleProps = Readonly<{
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend';
}>;

type LabelFormTitleProps = Readonly<{
	as: 'label';
	htmlFor: string;
}>;

type FormTitleProps = SharedFormTitleProps &
	(GeneralFormTitleProps | LabelFormTitleProps);

export const FormTitle = (props: FormTitleProps) => {
	const { as: As, error, children } = props;

	return (
		<As
			className={twMerge(
				'flex gap-x-1 text-xs font-bold uppercase text-header-secondary',
				error && 'text-text-danger',
			)}
			{...(As === 'label' && { htmlFor: props.htmlFor })}
		>
			{children}
		</As>
	);
};
