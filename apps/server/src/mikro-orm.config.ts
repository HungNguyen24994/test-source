import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleSyncOptions = {
  entities: ['./dist/database/entities'],
  entitiesTs: ['./src/database/entities'],
  type: 'postgresql',
  host: 'postgres',
  user: 'test',
  password: 'test',
  dbName: 'test-db',
  migrations: {
    path: './dist/database/migrations',
    pathTs: './src/database/migrations',
    glob: '!(*.d).{js,ts}',
  },
  validateRequired: false,
  debug: true,
};

export default config;
