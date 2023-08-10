import { logger } from '@ersanyamarya/common-node-utils'
import * as Koa from 'koa'
import bodyParser from 'koa-body'
import * as cors from 'koa2-cors'
import requestLoggerMiddleware from './middleware/request-logger'

import { RateLimit, RateLimitOptions } from 'koa2-ratelimit'

/* Create a new Koa instance, and add a couple of middleware. */
export const koaApp = async (rateLimitOptions?: Partial<RateLimitOptions>): Promise<Koa> => {
  logger.info('--------> Creating Koa app <--------')
  const app = new Koa()
  app.use(requestLoggerMiddleware())

  rateLimitOptions = rateLimitOptions || {
    interval: { min: 15 },
    max: 100,
    message: 'Sometimes You Just Have to Slow Down.',
  }
  app.use(RateLimit.middleware(rateLimitOptions))
  app.use(cors({ origin: '*' }))
  app.use(
    bodyParser({
      multipart: true,
    })
  )

  return app
}
