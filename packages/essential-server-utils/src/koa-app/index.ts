import { logger } from '@ersanyamarya/common-node-utils'
import * as Koa from 'koa'
import bodyParser from 'koa-body'
import * as cors from 'koa2-cors'
import requestLoggerMiddleware from './middleware/request-logger'

/* Create a new Koa instance, and add a couple of middleware. */
export const koaApp = async (): Promise<Koa> => {
  logger.info('--------> Creating Koa app <--------')
  const app = new Koa()
  app.use(requestLoggerMiddleware())

  app.use(cors({ origin: '*' }))
  app.use(
    bodyParser({
      multipart: true,
    })
  )

  return app
}
