import signup from '../pages/SignupPage'

describe('Register', () => {

 /*  before(() => {
    cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  })

  beforeEach(() => {
    cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
  })

  after(() => {
    cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
  })

  afterEach(() => {
    cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
  }) */

  it('user be a delivery man', () => {
    const deliveryman = {
      name: 'João Brito',
      cpf: '99833441300',
      email: 'joao@test.com',
      whatsapp: '85997381011',
      address: {
        postalcode: '60831070',
        street: 'Rua Miguel Guimarães',
        number: '50',
        details: 'fundos',
        district: 'Lagoa Redonda',
        city_uf: 'Fortaleza/CE'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }
    
    signup.go()
    signup.fillForm(deliveryman)
    signup.submit()
    
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  });

  it('cpf entered invalid', () => {
    const deliveryman = {
      name: 'João Brito',
      cpf: '998334413AA',
      email: 'joao@test.com',
      whatsapp: '85997381011',
      address: {
        postalcode: '60831070',
        street: 'Rua Miguel Guimarães',
        number: '50',
        details: 'fundos',
        district: 'Lagoa Redonda',
        city_uf: 'Fortaleza/CE'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }
    
    signup.go()
    signup.fillForm(deliveryman)
    signup.submit()

    
    signup.alertMessageShouldBe('Oops! CPF inválido')
  });
});
