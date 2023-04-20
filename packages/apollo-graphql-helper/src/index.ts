import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { logger } from '@ersanyamarya/common-node-utils'
import { GraphQLSchema } from 'graphql'
import { Server } from 'http'

export default async function apolloServerPlugin(schema: GraphQLSchema, httpServer: Server): Promise<ApolloServer> {
  logger.info('--------> Starting Apollo Server <--------')

  const apolloServer = new ApolloServer({
    schema,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: error => {
      const code = error.extensions?.code
      if (code && code === 'INTERNAL_SERVER_ERROR') {
        logger.error(error)
      }
      return error
    },
  })

  await apolloServer.start()

  return apolloServer
}
export * from './error-handler'
