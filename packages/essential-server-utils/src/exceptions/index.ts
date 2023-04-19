import { logger } from '@ersanyamarya/common-node-utils'

export const exceptions = (): void => {
  process.on('unhandledRejection', reason => {
    throw reason
  })

  process.on('uncaughtException', error => {
    logger.error(error.message, {
      err: error,
      context: { message: 'Uncaught exception' },
    })
  })
}
