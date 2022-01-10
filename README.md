
## Cadastro de evento

**RF**

- Deve ser possível cadastrar um evento.
- Deve ser possível listar todos os eventos.
- Deve ser possível buscar um único evento por `id`.
- Deve ser possível alterar as informações de um evento.
- Deve ser possível excluir um evento. 

**RN**

- Não deve ser possível cadastrar um evento com `provider` existente.
- Não deve ser possível buscar um evento com `id` inválido.
- Não deve ser possível alterar o `provider` já cadastrado no sistema.
- Não deve ser possível excluir evento que não exista no sistema.


## Cadastro de lançamentos

**RF**

- Deve ser possível cadastrar um lançamento.
- Deve ser possível listar todos os lançamentos.
- Deve ser possível buscar um único lançamento por `id`.
- Deve ser possível alterar as informações de um lançamentos.
- Deve ser possível excluir um lançamento. 

**RN**

- Não deve ser possível cadastrar um lançamento com `provider` existente.
- Não deve ser possível buscar um lançamento com `id` inválido.
- Não deve ser possível alterar o `provider` já cadastrado no sistema.
- Não deve ser possível excluir lançamento que não exista no sistema.

## Cadastro de artigos

**RF**

- Deve ser possível cadastrar um artigo.
- Deve ser possível listar todos os artigos.
- Deve ser possível buscar um único artigo por `id`.
- Deve ser possível alterar as informações de um artigo.
- Deve ser possível excluir um artigo. 

**RN**

- Não deve ser possível buscar um artigo com `id` inválido.
- Não deve ser possível cadastrar um artigo com `events_id` inválido.
- Não deve ser possível cadastrar um artigo com `launches_id` inválido.
- Não deve ser possível excluir artigo que não exista no sistema.

<br>

# 🔧 Tecnologias utilizadas

- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [Jest](https://jestjs.io)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

<br>

# 👷‍♂️ Arquitetura

Clean Architecture

# 🗳 Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 15.4.0)


⚠ Você pode usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br/>

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/jhongomes/Space-Flight-News.git

# Acesse a pasta do projeto
$ cd Space-Flight-News

# Instale todas as dependências do projeto
$ yarn 
ou
$ npm i

# Rode o comando para criar as mirations no SQLITE.
$ yarn typeorm migration:run
ou
$ npm run typeorm migration:run

# Rode o projeto
$ yarn dev
ou
$ npm run dev
```
<br />