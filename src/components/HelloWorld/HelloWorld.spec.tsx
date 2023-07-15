import { render, screen } from '@testing-library/react';

import { HelloWorld } from './HelloWorld';

describe('HelloWorld', () => {
	it('should render component', () => {
		render(<HelloWorld />);
		expect(screen.getByText('Hello, World!')).toBeInTheDocument();
	});
});
