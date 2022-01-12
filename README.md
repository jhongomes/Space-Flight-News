# Back-end Challenge 🏅 2022 - Space Flight News

# 📜 Sobre

    
 Space Flight News é uma API REST que permite outras aplicações se integrarem para publicar noticias de voos espaciais pelo mundo. A API é um code challenge da coodesh, desenvolvida em um banco relacional `postgres` em um container `docker`

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
- [docker](https://docs.docker.com/)
- [Jest](https://jestjs.io)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

<br>

# 👷‍♂️ Arquitetura

Clean Architecture

# 🗳 Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 12.17.0 ou supeiror 15.4.0)
- [docker](https://docs.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)


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

# Rode o comando para criar um database no docker
$ docker-compose up -d

# Rode o comando para subir as migrations no docker
$ yarn typeorm migration:run
ou
$ npm run typeorm migration:run

# Rode o projeto
$ yarn dev
ou
$ npm run dev
```
<br />

# Documentação
 A documentação pode ser acessada através: http://localhost:3333/api-docs quando o servidor local estiver ativo. 

<br />



# Rotas locais

## Cadastrar eventos
* `POST http://localhost:3333/events`

Request body example:

 ```json
{
	"provider": "Provider name"
}
 ```
## Listar eventos

Request url parameters example:

* `GET http://localhost:3333/events`

## Atualizar dados de um evento

* `http://localhost:3333/events/{id}`

Request url parameters example:

```
   id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```

Body example:

```json
{
	"provider": "Provider events"
}

```

## Remover evento
* `http://localhost:3333/events/{id}`
  
Request url parameters example:

```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4" 
```

<br/>


# Lançamentos
## Cadastrar lançamentos
* `POST http://localhost:3333/launches`

Request body example:

 ```json
{
	"provider": "Provider name"
}
 ```
## Listar lançamentos

⚠ Paginação aplicada com limite de 10 registros.

Request url parameters example:

* `GET http://localhost:3333/launches`

## Atualizar dados de um lançamento

* `http://localhost:3333/launhces/{id}`

Request url parameters example:

```
   id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```

Body example:

```json
{
	"provider": "Provider events"
}

```

## Remover lançamento
* `http://localhost:3333/launches/{id}`
  
Request url parameters example:

```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4" 
```
# Artigos
## cadastrar artigos

* `POST http://localhost:3333/articles`

Request body example:

 ```json
{    
     "title": "Busca espacial da Nasa",
	 "featured": false,
	 "url": "https://articles.com.br",
	 "newsSite": "teste newsSite",
	 "summary": "Summary teste articles",
	 "publishedAt": "2022-01-11T22:42:00.000Z",
	 "launches_id": "fc57ed39-780c-49da-b010-0a731bd303a7",
	 "events_id": "31fb3756-fc8c-457a-8f29-e308490990d0"
}
 ```
## Listar artigos

⚠ Paginação aplicada com limite de 10 registros.

Request url parameters example:

* `GET http://localhost:3333/articles`

## Atualizar dados de um artigo

* `http://localhost:3333/articles/{id}`

Request url parameters example:

```
   id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```

Request body example:

 ```json
{
     "title": "Busca espacial da Nasa em marte",
	 "featured": false,
	 "url": "https://articles.com.br",
	 "newsSite": "SpaceFlightNews",
	 "summary": "Summary teste articles",
	 "publishedAt": "2022-01-11T22:42:00.000Z",
	 "launches_id": "fc57ed39-780c-49da-b010-0a731bd303a7",
	 "events_id": "31fb3756-fc8c-457a-8f29-e308490990d0"
}
```

## Remover artigo

* `http://localhost:3333/articles/{id}` 
  
Request url parameters example:

```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4" 
```
<br />

# Testes
[Jest](https://jestjs.io/) Foi utilizado para os testes, para rodá-los execute:
```
$ yarn test
```
Ou:
```
$ npm run test
```

<br />


<p align="center">Feito com 💜 por<a href="https://www.linkedin.com/in/jhonatan-gomes-de-souza-513a3a197?challengeId=AQFBHhiP4QdIHQAAAX3BFHIS5K2MDNtBpp5ivwl-velebU8gwQxxhLIz51nO-__MejbD6jfZvQdyKWzrLVGfHNChGYGu8GqyMA&submissionId=ebdd152b-6a1b-c116-99c3-2848b7bbe760" target="_blank">Jhonatan Gomes </a></p>