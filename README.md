before(() => {
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
})
