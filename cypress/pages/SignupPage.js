class SignupPage {
  go() {
    cy.visit('/')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  }

  fillForm(deliverMan) {
    cy.get('input[type="text"][name="fullName"]').type(deliverMan.name)
    cy.get('input[type="text"][name="cpf"]').type(deliverMan.cpf)
    cy.get('input[type="text"][name="email"]').type(deliverMan.email)
    cy.get('input[type="text"][name="whatsapp"]').type(deliverMan.whatsapp)

    cy.get('input[type="text"][name="postalcode"]').type(deliverMan.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()

    cy.get('input[type="text"][name="address-number"]').type(deliverMan.address.number)
    cy.get('input[type="text"][name="address-details"]').type(deliverMan.address.details)

    cy.get('input[name="address"]').should('have.value', deliverMan.address.street)
    cy.get('input[name="district"]').should('have.value', deliverMan.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliverMan.address.city_uf)

    cy.contains('.delivery-method li', deliverMan.delivery_method).click()
    cy.get('input[accept^="image"]').attachFile(`/images/${deliverMan.cnh}`)
  }

  submit() {
    cy.get('form button[type="submit"]').click()
  }

  modalContentShouldBe(expectedMessage) {
    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
  }

  alertMessageShouldBe(expectedMessage) {
    cy.get('.alert-error').should('have.text', expectedMessage)
  }
}

export default new SignupPage;