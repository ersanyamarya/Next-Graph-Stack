import { colors } from './console-colors'
import { Logger, LOG_LEVEL, LogLevel } from './logger-type'

const { green, red, yellow, blue, bgYellow, bgRed } = colors
const logLevels: LOG_LEVEL[] = ['debug', 'info', 'warn', 'error', 'fatal', 'log']

const shouldPrintLog = (level: LOG_LEVEL) => {
  const logLevelIndex = logLevels.indexOf(LogLevel)
  const levelIndex = logLevels.indexOf(level)
  return levelIndex >= logLevelIndex
}

export const customLogger: Logger = {
  log: (...args: unknown[]) => shouldPrintLog('log') && console.log(green, ...args),
  error: (...args: unknown[]) => shouldPrintLog('error') && console.error(red, ...args),
  warn: (...args: unknown[]) => shouldPrintLog('warn') && console.warn(yellow, ...args),
  info: (...args: unknown[]) => shouldPrintLog('info') && console.info(blue, ...args),
  debug: (...args: unknown[]) => shouldPrintLog('debug') && console.debug(bgYellow, ...args),
  fatal: (...args: unknown[]) => shouldPrintLog('fatal') && console.error(bgRed, ...args),
}
