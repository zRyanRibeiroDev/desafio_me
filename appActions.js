const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options();
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();

  //Essa classe veio da minha tentativa de aplicar o page object
  //havia instanciado o driver aqui também, juntamente com os metodos
  //Como mencionei, não consegui fazer, mas vou deixar ela nos arquivos 
  //para mostrar que tentei fazer

    class AppActions{
    
        constructor() {
            global.driver = driver;
        }
        
        async go_to_url(theURL){
            await driver.get(theURL);
        }
    
        async scroll(){
            await driver.actions().scroll(100,100,100,200).perform();
        }

        async delayExplicito5s(){
            await driver.wait(until.elementLocated(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')), 10000);
        }

    
        delay5s(){
             driver.manage().setTimeouts({implicit: 5000});
        }


        delay3s(){
             driver.manage().setTimeouts({implicit: 3000});
       }
    
        atualizar(){
             driver.navigate().refresh;
       }

        maximizar(){
            driver.manage().window().maximize();
        }
    
    
        async signIn(){
            const registrar = await driver.findElement(By.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'));
            registrar.click();
        } 
    
        async emailUsuario(){
            const campoEmail = await driver.findElement(By.xpath('//*[@id="email_create"]'));
            campoEmail.sendKeys('ryan.silva1234@outlook.com');
        }

        async btnCriarConta(){
            const botao = await driver.findElement(By.xpath('//*[@id="SubmitCreate"]'))
            botao.click();
        }

        async selecionarGenero(){
            const genero = await driver.findElement(By.id('id_gender1'));
            genero.click();
        }

        async primeiroNomeUsuario(){
            const campoEmail = await driver.findElement(By.xpath('//*[@id="customer_firstname"]'));
            campoEmail.sendKeys('Ryan Ribeiiro');
        }

    }

module.exports = new AppActions();
