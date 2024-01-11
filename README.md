# PokeAPI

## Introduction

This service allows manage a pokedex database

## Description

This project is building using NestJS and MongoDB

Nest packages:

- [ConfigModule](https://docs.nestjs.com/techniques/configuration)
- [MongooseModule](https://docs.nestjs.com/techniques/mongodb)
- [CqrsModule](https://docs.nestjs.com/recipes/cqrs)
- [HttpModule](https://docs.nestjs.com/techniques/http-module)
- [SwaggerModule](https://docs.nestjs.com/openapi/introduction)

Other featured packages:

- [Pug](https://pugjs.org)
- [Lodash](https://lodash.com/)
- [Luxon](https://moment.github.io/luxon/#/)
- [Puppeteer](https://pptr.dev/)

## Requirements

|Technology |Version|
|:----------|:-----:|
| NodeJS    | 20.X  |
| MongoDB   | 5.0   |

Notes:

- There is a docker-compose.yml with mongodb dependency, just use nvm to switch node version.

## Installation

1. Install dependencies
2. Install husky hooks
3. Launch server

Install dependencies

```shell
yarn install
```

Install and configure husky

```shell
npx husky install
```

## Launch

You can launch some architecture dependencies with Docker using Docker Compose.

Start services

```shell
yarn hello
```

Stop services

```shell
yarn bye
```

| Services |  -   |
|:---------|:----:|
| MongoDB  | 5.0  |

## Documentation

|          |                                                       |
|:---------|:------------------------------------------------------|
| Swagger  | [View](http://localhost:6974/docs)                    |
| Compodoc | [View](https://docs.nestjs.com/recipes/documentation) |
| Live API | [View](https://pokeapi-8jv4.onrender.com)             |

## Database population

- `POST /v1/pokemons/sync` fetch all pokemons from pokeapi and save into the database.
- `POST /v1/pokemons/clean` remove all pokemons from the database

## Testing

Create unit testings to ensure domain is working well: happy path and handled errors.

Run unit testing band

```shell
yarn test
```

Run end to end testing band

```shell
yarn test:e2e
```
