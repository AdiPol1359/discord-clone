describe('The Login Page', () => {
	it('should ', () => {
		cy.intercept('POST', '/auth/v1/token?grant_type=password', {
			fixture: 'session.json',
		}).as('login');

		cy.visit('/login');

		cy.getByTestId('email').type('foo@gmail.com');
		cy.getByTestId('password').type('foobar123{enter}');

		cy.url().should('include', '/app');
	});
});
