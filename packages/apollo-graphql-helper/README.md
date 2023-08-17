# apollo-graphql-helper

This library was generated with [Nx](https://nx.dev). It exports a function `apolloServerPlugin` and everything from `./error-handler`.

The `apolloServerPlugin` function takes a GraphQL schema and an HTTP server as arguments, and returns a Promise that resolves to an ApolloServer instance. This function is used to start the Apollo Server with the provided schema and HTTP server.

The `./error-handler` module likely contains utilities for handling errors in a GraphQL context.

Example usage:
```typescript
import apolloServerPlugin from 'apollo-graphql-helper'

const schema = // your GraphQL schema
const httpServer = // your HTTP server

apolloServerPlugin(schema, httpServer).then(apolloServer => {
  // Apollo Server is now running
})
```

## Running unit tests

Run `nx test apollo-graphql-helper` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint apollo-graphql-helper` to execute the lint via [ESLint](https://eslint.org/).
