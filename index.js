
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function cadastrarUsuario() {
  try {
    let options = new chrome.Options();
    let driver = await new Builder()
                .setChromeOptions(options)
                .forBrowser('chrome')
                .build();
    //const documentInitialised = () =>  driver.executeScript('return initialised');
    await driver.get('http://automationpractice.com/index.php');
    const registrar = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'));

    //driver.manage().setTimeouts({implicit: 10000})
    driver.manage().window().maximize();
    registrar.click();
    await driver.manage().setTimeouts({implicit: 3000})
    driver.actions().scroll(100,100,100,200).perform();

    const campoEmail = await driver.findElement(By.xpath('//*[@id="email_create"]'));
    campoEmail.sendKeys('ryan.silva1234@outlook.com');

    const botao = await driver.findElement(By.xpath('//*[@id="SubmitCreate"]'))
    botao.click();

    await driver.manage().setTimeouts({implicit: 9000})

    const genero = await driver.findElement(By.xpath('//*[@id="id_gender1"]'));
    genero.click();

    const primeiroNome = await driver.findElement(By.xpath('//*[@id="customer_firstname"]'))
    primeiroNome.sendKeys('Ryan')
    
    driver.actions().scroll(0,0,0,200).perform();

    const ultimoNome = await driver.findElement(By.xpath('//*[@id="customer_lastname"]'))
    ultimoNome.sendKeys('Ribeiro')

    await driver.manage().setTimeouts({implicit: 3000})
    const senha = await driver.findElement(By.xpath('//*[@id="passwd"]'))
    senha.sendKeys('Ry@_482918')

    const diaNascimento = await driver.findElement(By.id('days'))
    diaNascimento.sendKeys('12')

    const mesNascimento = await driver.findElement(By.id('months'))
    mesNascimento.sendKeys('June')

    const anoNascimento = await driver.findElement(By.id('years'))
    anoNascimento.sendKeys('2002')

    driver.actions().scroll(0,0,0,500).perform();

    const endereco = await driver.findElement(By.xpath('//*[@id="address1"]'))
    endereco.sendKeys('May Street')

    const cidade = await driver.findElement(By.xpath('//*[@id="city"]'))
    cidade.sendKeys('Las Vegas')

    driver.actions().scroll(0,0,0,500).perform();

    const estado = await driver.findElement(By.id('id_state'))
    estado.sendKeys('Nevada')

    await driver.manage().setTimeouts({implicit: 5000})

    const codigoPostal = await driver.findElement(By.xpath('//*[@id="postcode"]'))
    codigoPostal.sendKeys('39287')

    const pais = await driver.findElement(By.id('id_country'))
    pais.sendKeys('United States')

    const telefone = await driver.findElement(By.xpath('//*[@id="phone_mobile"]'))
    telefone.sendKeys('+55 11 972818091')
  

  } catch (error) {
    console.log(error)
  }
})();

//Utilizar o mesmo código para os 3 cenários
//utilizar um loop for e um contador, este vai determinar qual cenário será testado
//Deverá ser feito um cadastro de usuário
//Utilizar um gerador de dados fake para testar um cenário de login inválido
//como também é valido testar da seguinte forma
//De início será utilizar o mesmo login para tudo: sucesso, inválido e em branco
//O que vai determinar os cenários será o contador
//Por exemplo con = 0, será o teste que funcionará
//con = 1 será o que vai dar login inválido
//Por fim con = 2 será o cenário em que o login ficará em branco
//Para cada número será feita uma pequena mudança nos dados a serem inseridos:E-mail e senha
//Assim as funcionalidades poderão ser testadas
//utilizar de delays para que o bot não vá rápido demais

/* const registrar = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'));
    await registrar.sendKeys(Key.ENTER);
    const email = await driver.findElement(By.xpath('//*[@id="email"]'));
    await email.sendKeys('ryan_ribeiro106@outlook.com');
    await email.sendKeys(Key.TAB);
    const password = await driver.findElement(By.xpath('//*[@id="passwd"]'));
    await password.sendKeys('Ry@.290189');
    const botao = await driver.findElement(By.xpath('//*[@id="SubmitLogin"]'));
    await botao.sendKeys(Key.ENTER);
    await driver.quit(); */
