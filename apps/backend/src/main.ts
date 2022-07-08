/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';

import AppDataSource from './app/services/Database';
import dataSources from './app/graphql/dataSources';
import { resolvers } from './app/graphql/resolvers';
import typeDefinitions from './app/graphql/typeDefs';

const API_PORT = process.env.API_PORT || 3333;

const boot = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();

    const server = new ApolloServer({
      typeDefs: typeDefinitions,
      resolvers,
      dataSources,
      stopOnTerminationSignals: true,
    });

    await server.listen(API_PORT);

    console.log(`Listening at http://localhost:${API_PORT}/graphql`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

boot();
