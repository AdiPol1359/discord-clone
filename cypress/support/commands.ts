/* eslint-disable @typescript-eslint/no-namespace */

Cypress.Commands.add('getByTestId', (id) => {
	return cy.get(`[data-test="${id}"]`);
});

declare namespace Cypress {
	interface Chainable {
		getByTestId(id: string): Chainable<JQuery<HTMLElement>>;
	}
}
