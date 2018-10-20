import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

import { defaults, typeDefs, resolvers } from "./graphql/schema";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults,
  typeDefs,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;
