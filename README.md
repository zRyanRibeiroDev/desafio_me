# Resolução do Desafio Me
## Instalação
Olá, abaixo veremos todo o processo para instalação e inicialização do projeto
     
- Como editor de código optaremos pelo VS Code, para realizar a instalação <br>
  vamos acessar este link: https://code.visualstudio.com/ . <br>
  Após a instalação podemos criar a pasta do projeto onde vamos instalar as dependências<br>
  necessárias para que o mesmo funcione, abra a pasta com o VSCode e depois o terminal<br>
  onde já podemos rodar esse comando: git init, se o comando não funcionar<br>
  provavelmente falta realizar o download do git: https://git-scm.com/
  
- Mais a frente vamos precisar rodar o comando git clone para que o projeto seja clonado<br>
  no editor de código e assim poderemos rodar o código. Tambem precisamos realizar <br>
  a instalação do Node.js nosso ambiente de execução: https://nodejs.org/en/

- Utilizaremos o Selenium Framework para que possamos rodar os testes.<br>
  Neste link será possível acessar toda a documentação dele e realizar o download <br>
  da biblioteca https://www.selenium.dev/documentation/webdriver/getting_started/install_library/ <br>
  para cada linguagem existe uma maneira de instalação, como vamos usar a linguagem <br> 
  Javascript e Node.js precisamos apenas rodar o seguinte comando no terminal: 
  #### npm install selenium-webdriver

- Também será necessário fazer a instalação do WebDriver para que o Selenium funcione <br>
  cada navegador possui um, aqui poderemos realizar o download: https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/ .<br>
  Vamos utilizar o chromedriver, podemos baixar de duas formas: acessando o link acima e <br>
  baixando o arquivo .zip para nosso sistema operacional, atenção a versão do driver, <br>
  caso tenha dúvidas verifique a versão do Chrome. 
  <br>
  <br>
  Em um cenário no Windows, vamos criar uma pasta no diretório C:\ podemos chamar de webdriver,<br>
  em seguida precisamos extrair o arquivo .exe dentro  do .zip e vamos adicionar na pasta criada.<br>
  Agora precisamos adicionar esse diretório C:\webdriver no path nas variáveis de ambiente.
  <br>
  <br>
  A outra maneira é rodando o seguinte comando no terminal do VS Code
  #### npm install chromedriver
  Feito isso podemos clonar o projeto com o seguinte comando:
  git clone -b master https://github.com/zRyanRibeiroDev/desafio_me/
  
# Um pouco sobre as tecnologias utilizadas no projeto
## Git
- Sistema de versionamento de código, com ele é possível gerar diferentes versões<br>
  do projeto, caso seja em grupo podemos receber mudanças dos outros desenvolvedore<br>
  como também nós vamos enviarmos as nossas. Essencial para qualquer projeto.
## Node.js
- Plataforma que nos trás a capacidade de rodar códigos JavaScript 
  fora dos navegadores através da engine V8, mesma utlizada pelos mesmos.
## Selenium 
- Framework usado para testar aplicações web pelo browser de forma automatizada.
  
## Selenium WebDriver
- O WebDriver usa o próprio driver do navegador para a automação, <br>
  permitindo a interação entre o script de teste e o respectivo browser.
