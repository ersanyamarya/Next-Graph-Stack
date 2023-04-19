import { customLogger } from './colored-console'

export type LOG_LEVEL = 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'log'

export type Logger = {
  [key in LOG_LEVEL]: (...args: any[]) => void
}

// let logger: Logger = { ...console, fatal: console.error }
let logger: Logger = customLogger
let LogLevel: LOG_LEVEL = 'debug'

export function setLogger(newLogger: Logger): void {
  logger = newLogger
}

export function setLogLevel(newLogLevel: LOG_LEVEL): void {
  LogLevel = newLogLevel
}

export { logger, LogLevel }
