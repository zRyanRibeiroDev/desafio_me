const { faker } = require('@faker-js/faker');

faker.locale = 'en_US';
const usuarios = [];

// Mesmo caso para essa classe do gerador
// Não consegui chamar essa classe no outro código
// Porém vou deixar ela nos arquivos para que fique 
// constatado que iniciei

//Utilizei a biblioteca faker.js para gerar os dados

    for (i = 0; i < 3; i++){

        const primeiroNome = faker.name.firstName(); 
        const ultimoNome = faker.name.lastName();
        const email = faker.internet.email(primeiroNome, ultimoNome); 
        const senha = faker.internet.password(8, true);
        const numero = faker.phone.phoneNumber();
        const dataNascimento = faker.date.past(20, '2000-01-01T00:00:00.000Z')
        const endereco = faker.address.streetName();
        const cidade = faker.address.cityName();
        const estado = faker.address.state();
        const codigoPostal = faker.address.zipCode('#####');
        const pais = 'United States'

        usuario = {
            primeiroNome,
            ultimoNome,
            email,
            senha,
            numero,
            dataNascimento,
            endereco,
            cidade,
            estado,
            codigoPostal,
            pais,
    
        }
        
        
      //  usuarios.push(usuario);
        
    }

    


