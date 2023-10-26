import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";
dotenv.config();

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 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`,
  },
});

export default client;
