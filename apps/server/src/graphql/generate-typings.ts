import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/graphql/sdl/*.graphql'],
  path: join(process.cwd(), './src/graphql/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
