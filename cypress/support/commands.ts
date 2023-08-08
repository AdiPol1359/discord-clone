/* eslint-disable @typescript-eslint/no-namespace */

Cypress.Commands.add('getByTestId', (id) => {
	return cy.get(`[data-test="${id}"]`);
});

Cypress.Commands.add('fakeProfile', () => {
	return cy
		.intercept('GET', '/rest/v1/profile?select=username%2Cborn_at', {
			fixture: 'profile.json',
		})
		.as('profile');
});

declare namespace Cypress {
	interface Chainable {
		getByTestId(id: string): Chainable<JQuery<HTMLElement>>;
		fakeProfile(): Chainable<null>;
	}
}
