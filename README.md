# PokeAPI

## Introduction

This service allows manage a pokedex database

## Description

This project is building using NestJS and MongoDB

Nest packages:

- [ConfigModule](https://docs.nestjs.com/techniques/configuration)
- [MongooseModule](https://docs.nestjs.com/techniques/mongodb)

Other featured packages:

- [Pug](https://pugjs.org)
- [Lodash](https://lodash.com/)
- [Luxon](https://moment.github.io/luxon/#/)

## Requirements

|         |      |
|:--------|:----:|
| NodeJS  | 20.0 |
| MongoDB | 5.0  |

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
