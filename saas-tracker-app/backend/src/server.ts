import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas';
import { setRoutes } from './routes';
import { connectToDatabase } from './config/db';

const app = express();

// Connect to the database
connectToDatabase();

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo Server middleware to Express app
server.applyMiddleware({ app });

// Set up routes
setRoutes(app);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});