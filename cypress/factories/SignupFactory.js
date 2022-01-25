const faker = require('faker')
const cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '85997381011',
      address: {
        postalcode: '60831081',
        street: 'Rua Maciel Rocha',
        number: '50',
        details: 'fundos',
        district: 'Lagoa Redonda',
        city_uf:'Fortaleza/CE'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }
    return data;
  }
}