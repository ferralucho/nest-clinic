# NestJS Boilerplate

It's built using the latest version of NestJS, which is a powerful and flexible framework for creating efficient and scalable server-side applications. The boilerplate includes TypeScript, PostgreSQL, and JWT authentication right out of the box, so you don't have to worry about setting those up yourself.

Other awesome features include configuration support with Dotenv, RBAC and CBAC for authorization, TypeORM for interacting with databases, Swagger for API documentation, and Docker Compose for container orchestration. Plus, the boilerplate also comes with pre-configured linting tools and secure HTTP headers with Helmet.

## 🚀 Features

- 📱 **NestJS** — latest version
- 🎉 **TypeScript** - Type checking
- ⚙️ **Dotenv** - Supports environment variables
- 🗝 **Authentication** - JWT, RSA256
- 🏬 **Authorization** - RBAC, CBAC
- 🏪 **TypeORM** - Database ORM
- 🏪 **PostgreSQL** - Open-Source Relational Database
- 🧠 **Configuration** - Single config for all
- 📃 **Swagger** - API Documentation
- 🐳 **Docker Compose** - Container Orchestration
- 🔐 **Helmet** - secure HTTP headers
- 😴 **Insomnia** - Insomnia config for endpoints
- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** - Opinionated Code Formatter
- ✨ **Commitlint** - Lint your conventional commits
- 🕵️‍♂️ **Code Scanning** - Code scanning with CodeQL

## Quick Setup (Production)

```bash
bash ./setup.sh
```

## Installation (Development)

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

1. Install the insomnia app
2. Import the `endpoints.json` file

## Generate SSL certificates

1.  Generate an RSA private key, of size 2048, and output it to a file named key.pem:

```bash
openssl genrsa -out private_key.pem 2048
```

```bash
# It needs be copied&pasted from terminal manually
awk 'NF {sub(/\r/, ""); printf"%s\\n",$0;}' private_key.pem
```

2.  Extract the public key from the key pair, which can be used in a certificate:

```bash
openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem
```

```bash
# It needs be copied&pasted from terminal manually
awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' public_key.pem
```
