import { logger } from '@ersanyamarya/common-node-utils'
import { GraphQLError } from 'graphql/error'

const GQLErrorHandler = (
  message: string,
  code: 'UNAUTHENTICATED' | 'FORBIDDEN' | 'USER_INPUT' | 'UNKNOWN' | 'QUOTA_EXCEEDED',
  context?: Record<string, unknown>
) => {
  logger.error(JSON.stringify({ message, code, context }, null, 2))
  handleDuplicateKeyError(message.toString())
  throw new GraphQLError(message, {
    extensions: {
      code,
    },
  })
}

export { GQLErrorHandler }

function handleDuplicateKeyError(message: string) {
  if (message.includes('duplicate key error')) {
    const collection = message.match(/mqtizer.(\w+)/)[1]
    const name = message.match(/name: "(\w+)"/)[1]
    throw new GraphQLError(`Duplicate ${collection} name: ${name}`, {
      extensions: {
        code: 'DUPLICATE_KEY_ERROR',
      },
    })
  }
}
