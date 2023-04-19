import { logger } from '@ersanyamarya/common-node-utils'
import { Context, Next } from 'koa'

export default () =>
  async (ctx: Context, next: Next): Promise<void> => {
    const started = Date.now()
    await next()
    const elapsed = Date.now() - started + 'ms'

    const msg = `${ctx.method}: ${ctx.url} - ${ctx.status} | ${ctx.type} | [${elapsed}]`
    logger.debug(msg)
  }
