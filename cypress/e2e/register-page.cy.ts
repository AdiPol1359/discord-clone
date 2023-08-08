describe('The Register Page', () => {
	it('should redirect to the app after successful registration', () => {
		cy.intercept('POST', '/auth/v1/signup', {
			fixture: 'session.json',
		}).as('register');

		cy.fakeProfile();

		cy.visit('/register');

		cy.getByTestId('rules').click();

		cy.getByTestId('day').type('1{enter}');
		cy.getByTestId('month').type('January{enter}');
		cy.getByTestId('year').type('2000{enter}');
		cy.getByTestId('email').type('foo@gmail.com');
		cy.getByTestId('username').type('foo');
		cy.getByTestId('password').type('foobar123{enter}');

		cy.wait('@register');

		cy.url().should('include', '/app');
	});
});
