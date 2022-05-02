# Resolução do Desafio Me
Olá, abaixo veremos todo o processo para instalação e inicialização do projeto
     
- Como editor de código optaremos pelo VS Code, para realizar a instalação <br>
  vamos acessar este link: https://code.visualstudio.com/ . <br>
  Após a instalação podemos criar a pasta do projeto onde vamos instalar as dependências<br>
  necessárias para que o mesmo funcione, abra a pasta com o VSCode e depois o terminal.

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
  - Feito isso podemos começar a codar.
  
  
