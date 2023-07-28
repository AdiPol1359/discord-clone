'use client';

import { Combobox } from '@headlessui/react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '../Input/Input';

import ArrowDown from '@/ui/assets/svg/arrow-down.svg';

import type { FocusEventHandler } from 'react';

import type { SharedComponentProps } from '@/ui/ui.types';

type AutocompleteProps = Readonly<{
	name?: string;
	placeholder?: string;
	data: string[];
	value: string;
	onChange: (value: string) => void;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}> &
	SharedComponentProps;

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
	({ name, placeholder, data, value, onChange, onBlur, testId }, ref) => {
		const [query, setQuery] = useState('');

		const options = query
			? data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
			: data;

		return (
			<div className="relative">
				<Combobox value={value} onChange={onChange}>
					<Combobox.Input
						as={Input}
						ref={ref}
						name={name}
						testId={testId}
						placeholder={placeholder}
						autoComplete={false}
						spellCheck={false}
						icon={<ArrowDown />}
						onChange={({ target }) => setQuery(target.value)}
						onBlur={onBlur}
					/>
					<Combobox.Options className="absolute bottom-full max-h-52 w-full overflow-auto rounded-b border border-background-tertiary bg-background-secondary shadow-md shadow-black/20">
						{options.length === 0 ? (
							<p className="py-2 text-center leading-4 text-[#999]">
								Brak wyników
							</p>
						) : (
							options.map((option) => (
								<Combobox.Option
									key={option}
									value={option}
									className={({ active, selected }) =>
										twMerge(
											'cursor-pointer p-3 font-medium text-interactive-normal',
											active &&
												'bg-background-modifier-hover text-interactive-hover',
											selected &&
												'bg-background-modifier-selected text-interactive-active',
										)
									}
								>
									{option}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Combobox>
			</div>
		);
	},
);

Autocomplete.displayName = 'Autocomplete';
