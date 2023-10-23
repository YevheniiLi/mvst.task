import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';
import 'stream-browserify';
import 'buffer';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";
dotenv.config();

const client = new ApolloClient ({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
    }
})

export default client;