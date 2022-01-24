describe('Register', () => {
  it('user be a delivery man', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    const deliveryman = {
      name: 'João Brito',
      cpf: '99999999999',
      email: 'joao@test.com',
      whatsapp: '85997381011',
      address: {
        cep: '60831070',
        street: 'Rua Miguel Guimarães',
        number: '50',
        details: 'fundos',
        district: 'Lagoa Redonda',
        city_uf: 'Fortaleza/CE'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    cy.get('input[type="text"][name="name"]').type(deliveryman.name)
    cy.get('input[type="text"][name="cpf"]').type(deliveryman.cpf)
    cy.get('input[type="email"][name="email"]').type(deliveryman.email)
    cy.get('input[type="text"][name="whatsapp"]').type(deliveryman.whatsapp)

    cy.get('input[type="text"][name="postalcode"]').type(deliveryman.address.cep)
    cy.get('input[type="button"][value="Buscar CEP"]').click()

    cy.get('input[type="text"][name="address-number"]').type(deliveryman.address.number)
    cy.get('input[type="text"][name="address-details"]').type(deliveryman.address.details)

    cy.get('input[name="address"]').should('have.value', deliveryman.address.street)
    cy.get('input[name="district"]').should('have.value', deliveryman.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliveryman.address.city_uf)

    cy.contains('.delivery-method li', deliveryman.delivery_method).click()

    cy.get('input[accept^="image"]').attachFile(`/images/${deliveryman.cnh}`)
  });
});
