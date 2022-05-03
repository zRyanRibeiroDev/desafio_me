
const { logging } = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver'); //importando o selenium-webdriver 
const chrome = require('selenium-webdriver/chrome');

// Deixei algumas linhas de código comentadas pois foi minha tentativa
// de aplicar o page object. De inicio fiz uma versão com tudo no mesmo arquivo
// depois tentei aplicar o page object, mas não consegui, então deixei tudo no mesmo arquivo 

// Este projeto abre o navegador, clica no "Sign In", insere o e-mail a ser 
// cadastrado, depois vai para a tela de preenchimento dos dados
// Os campos começam a ser preenchidos e o login é efetuado
// Em seguida é feito logout, depois testado o login com dados inválidos
// E por último testado login com dados vazios

//Mais algumas ressalvas, tentei fazer um gerador para os dados
//Mas não consegui puxar as informações da outra classe
//Por isso os dados estão sendo inseridos dessa maneira

//const appActions = require('./appActions');  
//import que ia usar para o page obejct
//com esse appActions iria puxar os métodos de outra classe

(async function cadastrarUsuario() {
  try {
   let options = new chrome.Options()
   let driver = await new Builder()   //declarando o driver
              .setChromeOptions(options)
              .forBrowser('chrome')
              .build()  

    //aqui foi chamando os métodos

    /* let site = 'http://automationpractice.com/index.php'
    await appActions.go_to_url(site)
    appActions.delay5s();
    appActions.maximizar();
    await appActions.signIn();
    await appActions.delay5s()
    await appActions.scroll();
    await appActions.emailUsuario();
    await appActions.btnCriarConta();
    appActions.delay5s();
    appActions.atualizar();
    await appActions.scroll();
    await appActions.primeiroNomeUsuario();
    await appActions.selecionarGenero(); */
    
    //daqui para baixo começa o código funcional
    //abre site e encontra botão
    await driver.get('http://automationpractice.com/index.php')
    const registrar = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'))

    driver.manage().setTimeouts({implicit: 10000})  //delay 10s
    driver.manage().window().maximize()          //maximiza pagina
    registrar.click(); // clica no botão encontrado
    await driver.manage().setTimeouts({implicit: 3000}) //delay 3s
    driver.actions().scroll(100,100,100,200).perform()  //scroll

    //encontra o input do email e insere o email de cadastro 
    const emailRegistrar = await driver.findElement(By.xpath('//*[@id="email_create"]'));
    emailRegistrar.sendKeys('teste_desafio_me@outlook.com')
    //encontra o botao para criar a conta e clica nele
    const botao = await driver.findElement(By.xpath('//*[@id="SubmitCreate"]'))
    botao.click()

    await driver.manage().setTimeouts({implicit: 9000}) //delay 3s

    //a partir daqui já estamos no preenchimento dos dados do cadastro
    //então será bem repetitivo os comandos: encontrar o campo a ser preenchido
    //em seguida o dado será inserido ou haverá algum click

    const genero = await driver.findElement(By.xpath('//*[@id="id_gender1"]'))
    genero.click();

    const primeiroNome = await driver.findElement(By.xpath('//*[@id="customer_firstname"]'))
    primeiroNome.sendKeys('Ryan')
    
    driver.actions().scroll(0,0,0,200).perform()

    const ultimoNome = await driver.findElement(By.xpath('//*[@id="customer_lastname"]'))
    ultimoNome.sendKeys('Ribeiro')

    await driver.manage().setTimeouts({implicit: 3000})
    const senha = await driver.findElement(By.xpath('//*[@id="passwd"]'))
    senha.sendKeys('Dme_482918')

    const diaNascimento = await driver.findElement(By.id('days'))
    diaNascimento.sendKeys('12')

    const mesNascimento = await driver.findElement(By.id('months'))
    mesNascimento.sendKeys('June')

    const anoNascimento = await driver.findElement(By.id('years'))
    anoNascimento.sendKeys('2002')

    driver.actions().scroll(0,0,0,500).perform()

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

    await driver.manage().setTimeouts({implicit: 5000})

    //aqui termina o preenchimento e haverá o click no botão de registrar
    const btnRegistrar = await driver.findElement(By.xpath('//*[@id="submitAccount"]'))
    btnRegistrar.click()

    await driver.manage().setTimeouts({implicit: 8000}) // delay 8s

    //queria colocar uma condição para que eu pudesse mostrar essa mensagem do console.log
    //pensei em tentar pegar o valor da requisição http e caso desse certo mostrava a mensagem,
    //do contrario essa mensagem não apareceria
    console.log('Login Efetuado com sucesso')

    //faz o logout
    const sair = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[2]'))
    sair.click()

    await driver.actions().scroll(100,100,100,200).perform() //scroll
    
    //a partir daqui tentei efetuar o login com e-mail invalido para que o cenário 
    //de login inválido acontecesse, tentei fazer em função separada mas não soube como chamar

    const email = await driver.findElement(By.xpath('//*[@id="email"]'))
    await email.sendKeys('teste1_desafio_me@outlook.com')
  
    const senhaLogin = await driver.findElement(By.xpath('//*[@id="passwd"]'))
    await senhaLogin.sendKeys('Dme_482918')

    const botao2 = await driver.findElement(By.xpath('//*[@id="SubmitLogin"]'))
    await botao2.sendKeys(Key.ENTER)

    //pega a mensagem da tela de que o login foi inválido
    const loginInvalido = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li')).getText()
    console.log('Login Inválido: ', loginInvalido)

    driver.actions().scroll(100,100,100,200).perform() //scroll

    //a partir daqui testei o cenário de login vazio 
    //tentei fazer em função separada mas não soube como chamar

    const emailVazio = await driver.findElement(By.xpath('//*[@id="email"]'));  //encontra campo email
    const senhaVazia = await driver.findElement(By.xpath('//*[@id="passwd"]')); //encontra campo senha

    await emailVazio.clear() //limpa os campos
    await senhaVazia.clear()

    const botao3 = await driver.findElement(By.xpath('//*[@id="SubmitLogin"]')); //botão e clica
    await botao3.sendKeys(Key.ENTER)

    //pega a mensagem da tela de que o login ficou vazio
    const loginVazio = await driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li')).getText()
    console.log('Login Vazio: ', loginVazio)

    await driver.quit()
    
  } catch (error) {
    console.log(error)
  }
})();




   
    


