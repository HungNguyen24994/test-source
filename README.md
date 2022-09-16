# Test app

## Technical stack

- Backend: NodeJS (NestJS) + PostgresQL + Apollo GraphQL Server
- Frontend: React (NextJS) + TailwindCSS + Redux + Apollo GraphQL Client

## Directory structure

- **apps** _workspaces_
  - **server**
  - **web**
- **packages** _shared configs, libraries, ..._
  - **eslint-config-custom**
  - **tsconfig**
- **package.json**
- **yarn.lock**
- **turbo.json**

## How to run app

- Run app:

```bash
docker compose up -d
```

- View log:

```bash
docker compose logs -f web
```

- SSH to container

```bash
docker compose exec web sh
```

### Services

- Web: `http://localhost:3000`
- API: `http://localhost:3001/graphql`

## Development

_If you are using docker, all command should be run inside app container, not on host machine_

We are using [Turborepo](https://turborepo.org/) and [Yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

### Add new packages

- add new package for `server` workspace:

```bash
yarn workspace server add package-name
```

- remove package for `server` workspace:

```bash
yarn workspace server remove package-name
```

### Database

_We are using [MikroORM](https://mikro-orm.io/) and their migrations/seeders tool:_

- generate new migrations file base on new changes from `apps/server/database/entities`:

```bash
yarn workspace server migration:create
```

- run migrations:

```bash
yarn workspace server migration:up
```

- rollback migrations:

```bash
yarn workspace server migration:down
```