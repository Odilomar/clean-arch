# Clean Arch

This project goal is to apply Clean Archtecture with Express, PostgreSQL ans Swagger.

## Requirement

- Node.Js: v14.16
  - NPM: v6.14.11
- Docker: v20.10.6

## Instalation

To install project dependences, run the follow command where there are 'package.json' file:

```
    npm install
```

To upload the database with Docker, run the follow command where there are 'docker-compose.yml' file:

```
    npm run docker
```

To run all migrations to create tables in database, use the follow command where there are 'package.json' file:

```
    npm run migration:run
```

## Run

To run the app, use the follow command:

```
    npm start
```

### Swagger

After run the app, you can access swagger documentation in `http://localhost:3000/docs`.

## Endpoints:

- POST /users

  - Description: Create a new user;
  - Body:
    - name: string,
    - birth: Date as string,
    - email: string,

- GET /users/:id
  - Description: Retrieve user by ID;
  - Params:
    - id: number,
