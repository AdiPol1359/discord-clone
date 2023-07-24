import { act, renderHook } from '@testing-library/react';

import { useBoolean } from './useBoolean';

describe('useBoolean', () => {
	it('should not set the initial state', () => {
		const { result } = renderHook(() => useBoolean());

		expect(result.current.value).toBe(false);
	});

	it('should set the initial state', () => {
		const { result } = renderHook(() => useBoolean(true));

		expect(result.current.value).toBe(true);
	});

	it('should change the value', () => {
		const { result } = renderHook(() => useBoolean());

		act(() => {
			result.current.setTrue();
		});

		expect(result.current.value).toBe(true);

		act(() => {
			result.current.setTrue();
		});

		expect(result.current.value).toBe(true);

		act(() => {
			result.current.setFalse();
		});

		expect(result.current.value).toBe(false);

		act(() => {
			result.current.setFalse();
		});

		expect(result.current.value).toBe(false);
	});

	it('should toggle the value', () => {
		const { result } = renderHook(() => useBoolean());

		expect(result.current.value).toBe(false);

		act(() => {
			result.current.toggle();
		});

		expect(result.current.value).toBe(true);

		act(() => {
			result.current.toggle();
		});

		expect(result.current.value).toBe(false);

		act(() => {
			result.current.toggle();
		});

		expect(result.current.value).toBe(true);
	});
});
