import { useRef, useState } from 'react';

import { createSafeContext } from '@/utils/context';

import type { ReactNode } from 'react';

interface MultiSceneModalContextValue<T extends string = string> {
	readonly scene: ReactNode;
	readonly show: (id: T) => void;
	readonly back: () => void;
	readonly reset: () => void;
}

const [MultiSceneModalContextProvider, useMultiSceneModalContextInner] =
	createSafeContext<MultiSceneModalContextValue>();

const useMultiSceneModalContext = <T extends string = string>() =>
	useMultiSceneModalContextInner() as MultiSceneModalContextValue<T>;

const MultiSceneModalProvider = ({
	root,
	scenes,
	children,
}: {
	readonly root: ReactNode;
	readonly scenes: Record<string, ReactNode>;
	readonly children: ReactNode;
}) => {
	const [scene, setScene] = useState<ReactNode>(root);
	const stackRef = useRef<ReactNode[]>([]);

	const show = (id: string) => {
		if (scene !== root) {
			stackRef.current.push(scene);
		}

		setScene(scenes[id]);
	};

	const back = () => setScene(stackRef.current.pop() || root);

	const reset = () => {
		stackRef.current = [];
		setScene(root);
	};

	return (
		<MultiSceneModalContextProvider value={{ scene, show, back, reset }}>
			{children}
		</MultiSceneModalContextProvider>
	);
};

export { MultiSceneModalProvider, useMultiSceneModalContext };
