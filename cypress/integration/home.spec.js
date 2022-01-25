describe('home page', () => {
  it('app must be online', () => {
    cy.visit('/')

    const expectedMessage = 'Seja um parceiro entregador pela Buger Eats'
    cy.get('#page-home main h1').should('have.text', expectedMessage)
  });
});