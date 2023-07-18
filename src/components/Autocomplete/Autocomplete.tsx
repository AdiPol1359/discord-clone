'use client';

import { Combobox } from '@headlessui/react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '../Input/Input';

import ArrowDown from '@/assets/svg/arrow-down.svg';

type AutocompleteProps = Readonly<{
	placeholder?: string;
	data: string[];
	value: string;
	setValue: (value: string) => void;
}>;

export const Autocomplete = ({
	placeholder,
	data,
	value,
	setValue,
}: AutocompleteProps) => {
	const [query, setQuery] = useState('');

	const options = query
		? data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
		: data;

	return (
		<div className="relative">
			<Combobox value={value} onChange={setValue}>
				<Combobox.Input
					as={Input}
					placeholder={placeholder}
					autoComplete={false}
					spellCheck={false}
					icon={<ArrowDown />}
					onChange={({ target }) => setQuery(target.value)}
				/>
				<Combobox.Options className="absolute bottom-full max-h-52 w-full overflow-auto rounded-b border border-background-tertiary bg-background-secondary shadow-sm">
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
};
