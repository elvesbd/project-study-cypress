import signup from '../pages/SignupPage'

describe('Register', () => {
  beforeEach(function() {
    cy.fixture('deliveryman').then((man) => {
      this.deliveryman = man
    })
  })

  it('user be a delivery man', function()  {
    signup.go()
    signup.fillForm(this.deliveryman.signup)
    signup.submit()
    
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  });

  it('cpf entered invalid', function() {
    signup.go()
    signup.fillForm(this.deliveryman.cpf_invalid)
    signup.submit()

    signup.alertMessageShouldBe('Oops! CPF inválido')
  });
});
