import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";
dotenv.config();

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer `,
  },
});

export default client;
