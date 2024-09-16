import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TrackerResolver } from './resolvers';
import { AuthChecker } from './utils/auth';
import { createConnection } from 'typeorm';
import { Tracker } from './models';

async function startServer() {
  const app = express();

  // Connect to the PostgreSQL database
  await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Tracker],
    synchronize: true,
  });

  // Create the Apollo Server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TrackerResolver],
      authChecker: AuthChecker,
    }),
    context: ({ req }) => ({ req }),
  });

  // Apply the Apollo Server middleware to the Express app
  apolloServer.applyMiddleware({ app });

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();