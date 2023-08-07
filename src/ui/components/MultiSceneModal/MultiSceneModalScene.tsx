import { useMultiSceneModalContext } from './MultiSceneModalProvider';

export const MultiSceneModalScene = () => {
	const { scene } = useMultiSceneModalContext();

	return scene;
};
