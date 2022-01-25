import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory';

describe('Register', () => {
  /* beforeEach(function() {
    cy.fixture('deliveryman').then((man) => {
      this.deliveryman = man
    })
  }) */

  it('user be a delivery man', function()  {
    const deliveryman = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliveryman)
    signup.submit()
    
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  });

  it('cpf entered invalid', function() {
    const deliveryman = signupFactory.deliver()
    deliveryman.cpf = 'aa833441300'

    signup.go()
    signup.fillForm(deliveryman)
    signup.submit()

    signup.alertMessageShouldBe('Oops! CPF inválido')
  });

  it('email entered invalid', function() {
    const deliveryman = signupFactory.deliver()
    deliveryman.email = 'elves.com.br'

    signup.go()
    signup.fillForm(deliveryman)
    signup.submit()

    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
  });

  context('required fields', function() {
    const messages = [
      {field: 'name', output: 'É necessário informar o nome'},
      {field: 'cpf', output: 'É necessário informar o CPF'},
      {field: 'email', output: 'É necessário informar o email'},
      {field: 'postalcode', output: 'É necessário informar o CEP'},
      {field: 'number', output: 'É necessário informar o número do endereço'},
      {field: 'delivery_method', output: 'Selecione o método de entrega'},
      {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
    ]

    before(() => {
      signup.go()
      signup.submit()
    })

    messages.forEach((msg) => {
      it(`${msg.field} is required`, function() {
        signup.alertMessageShouldBe(msg.output)
      })
    })
  })

  /* it('required fields', function() {
    signup.go()
    signup.submit()

    signup.alertMessageShouldBe('É necessário informar o nome')
    signup.alertMessageShouldBe('É necessário informar o CPF')
    signup.alertMessageShouldBe('É necessário informar o email')
    signup.alertMessageShouldBe('É necessário informar o CEP')
    signup.alertMessageShouldBe('É necessário informar o número do endereço')
    signup.alertMessageShouldBe('Selecione o método de entrega')
    signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
  }); */
});
