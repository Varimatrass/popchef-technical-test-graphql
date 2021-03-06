# POPCHEF - Techninal test monorepo boilerplate

## Install

Make sure to install [Docker](https://docs.docker.com/get-docker/).

```sh
> npm i
> npm run docker:up
```

- Frontend is running on default port 4200
- Backend is running on default port 3333
- PostgreSQL database is running over Docker
  - external container port 4242
  - internal container port 5432 (default)

## Frontend

- [TailwindUI](https://tailwindui.com/components) is configured, feel free to use it
- [Apollo client](https://www.apollographql.com/docs/react/) is configured in `apps/frontend/src/app/services/graphql.ts`
  - `apps/frontend/src/app/shared/graphql/{mutations,queries}: Directory for your graphQL queries/mutations
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview) is configured, manage your routing from `apps/frontend/src/app/App.tsx`
  - `apps/frontend/src/app/pages`: Directory for route components

## Backend

Default environment variables are located in `backend/.env.local`.
You are free to change it.

- `main.ts`: Root server file, initialize datasource and apollo server

### Typeorm

- `npm run orm:migration:generate`: Automatically generate migration files with schema changes you made on entities
- `npm run orm:migration:run`: Run latest migration(s) on the database
- `npm run orm:migration:revert`: Revert last migration on the database
- `npm run orm:drop-schema`: Drops all tables within the specified database (along with the records).

- `app/entities`: TypeORM entities directory
- `app/migrations`: TypeORM migrations directory

### GraphQL

- `app/grapqhl/resolvers`: GraphQL resolvers directory
- `app/grapqhl/typeDefs`: GraphQL type definitions directory
- `app/grapqhl/providers`: GraphQL data source providers directory

- `npm run backend:graphql-codegen`: Generate GraphQL Typescript types inside `apps/backend/src/graphql/generated` directory
