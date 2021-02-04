# Introdução ao Backend com NodeJs e Express

**Tópicos**

* O que exatamente é backend?
* Evolução do Backend
* REST (Verbos de comunicação: GET, POST, PUT, DELETE)
* JSON
* JSON Viewer
* Postman (Criando/fazendo requisições e organizando em collections)
* JavaScript: do frontend para o backend
* NodeJS - Package Json
* NPM (Node Package Manager)
* Benchmarking
* Criação do projeto
* Início do desenvolvimento da aplicação CRUD

  * Create, Read (All/Single), Update & Delete
  * Criar, Ler (Tudo ou Individual), Atualizar e Remover
* Node Express - Body-Parser

## O que exatamente é backend?

Um computador que era um servidor e fazia todo o processamento. Acessávamos esse PC através de um terminal, que chamamos de terminal burro, que apenas aceitava comandos.

Servidor com duas camadas: backend e frontend.

- **Backend:** Camada de processamento de informação
  - Comunicar com Base de dados
  - Receber solicitações de uma página na web
  - Exibir informação
  - Processar informação
  - **Exemplo:** Quero obter informações do usuário de ID 1. Envio como resposta o nome e o sobrenome desse usuário.
  - **Tecnologias:**
    - Uma maneira de transportar a informação; uma estrutura para essa informação; Linguagem de programação que torna isso possível.
    - **Transportar a informação:** Protocolos (HTTP, TCP, UDP, entre outros)
    - **Estrutura da informação:** JSON, XML, TXT, HTML, etc
    - **Linguagem de programação:** JavaScript com NodeJS, PHP, Java, C# .NET, Python, Kotlin, entre diversas outras
    - **Geralmente irá acessar um banco de dados:** MySQL, MariaDB, MongoDB, DynamoDB, PostgreSQL, OracleDB, entre outros

- **Frontend:** Uma forma de interagir com essa informação
  - Uma exibição mais visual desse processo.
  - **Tecnologias:** HTML (linguagem de marcação, responsável pela estrutura da informação), CSS (linguagem de estilização, responsável por mudar o visual das informações) e JavaScript (linguagem de programação, responsável por manipular a informação de uma maneira mais dinâmica)

Servidores multi-camadas: Posso ter mais de um servidor backend e os servidores backend podem comunicar entre si. Um ou mais frontend se comunicam com os servidores de backend. Arquitetura de microserviços.

Comunicação entre computadores:

- **Protocolos:** TCP, UDP, HTTP

- **Endereço na web:** PROTOCOLO, IP e PORTA

  - **Exemplo:** globo.com
    - **Protocolo:** HTTP ou HTTPS
    - **IP:** 186.192.81.5 (máscara: www.globo.com)
    - **Porta:** 80 ou 443

- **Verbos do HTTP:** GET, POST, PUT, DELETE, entre outros

- **Estrutura da informação:** JSON, XML, HTML

  - Texto que está seguindo algum padrão de estrutura

  - **JSON:** Estrutura de dados herdada do JavaScript. JavaScript Object Notation

    - ```json
      {
        "nome": "Paulo Salvatore",
        "idade": 27,
        "vivo": true,
        "filmes": [
            "Senhor dos Anéis",
            "Harry Potter"
        ],
        "animais": [
            {
                "nome": "Nala",
                "tipo": "Cachorro"
            },
            {
                "nome": "Garfield",
                "tipo": "Gato"
            }
        ]
      }
      ```

  - Cada linguagem irá desserializar o JSON e transformar em algo que consiga entender e navegar.

  - **XML:**

    - ```xml
      <pessoa>
          <nome>Paulo Salvatore</nome>
          <idade>27</idade>
          <vivo>true</vivo>
      </pessoa>
      ```
      
    - ```xml
      <pessoa nome="Paulo Salvatore" idade="27" vivo="true" />
      ```