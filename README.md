# NestJS

## What is going to be evaluated?

1. Clean Code
2. Self-documented Code
3. MVC Pattern
4. Error Handling
5. How to handle Async operations
6. Express Best practices
7. Configuration: How to use env variables 

## Exercise definition

The task involves creating the necessary functionalities that allow a user with a doctor role to view EHRS (which is a text file that describes the patient's symptoms and medical history) one by one and label them with an ICD-10 diagnostic code and a description of the diagnosis. The application should record the EHRS, doctor identifications and diagnosis labels. The user should be able to log in with their email and password.

1. Create an endpoint that allows the user to log in with their email and password, respond with an error message in case of failure with the most convenient error code.
2. Create an endpoint that allows the user to retrieve EHRS (use pagination).
3. Create an endpoint that allows the user to label an EHR with an ICD-10 diagnostic code and a description of the diagnosis, respond with an error message in case of failure with the most convenient error code.
4. Implement a middleware to handle application errors.

## Entities schema

Only as an example/reference. You can use create your own schema.

### EHR

* id
* patient_name
* description

### Users (Doctors)

* id
* name

### Conditions

* id
* diagnostic_code
* description

### EHR Diagnosis Labels

* id
* ehr_id
* doctor_id
* condition_id

-------

The project it's built using the latest version of NestJS, which is a powerful and flexible framework for creating efficient and scalable server-side applications. It includes TypeScript, PostgreSQL, and JWT authentication right out of the box, so you don't have to worry about setting those up yourself.

Features include configuration support with Dotenv, RBAC and CBAC for authorization, TypeORM for interacting with databases, Swagger for API documentation, and Docker Compose for container orchestration. It has pre-configured linting tools and secure HTTP headers with Helmet.

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
  
Use ehrinsomniaendpoints.json to import the endpoints into Insomnia.

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
