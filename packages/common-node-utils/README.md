# common-node-utils

This library was generated with [Nx](https://nx.dev). It exports several utility modules:

- `logger-type`: Contains types or interfaces related to logging functionality. You can use the `setLogger` and `setLogLevel` functions to customize the logger and log level. The logger has methods for different log levels: debug, info, warn, error, fatal, and log.

Example usage:
```typescript
import { logger, setLogger, setLogLevel } from 'common-node-utils/logger-type'

setLogLevel('debug')
logger.debug('This is a debug message')
```

- `random-token`: Contains a function `randomTokenGenerate` for generating random tokens, often used for security purposes.

Example usage:
```typescript
import { randomTokenGenerate } from 'common-node-utils/random-token'

const token = randomTokenGenerate(10)
console.log(token)
```

- `date-time`: Contains a function `dateAfter48Hours` that returns the date and time 48 hours from the current time.

Example usage:
```typescript
import { dateAfter48Hours } from 'common-node-utils/date-time'

const futureDate = dateAfter48Hours()
console.log(futureDate)
```

- `console-colors`: Contains an object `colors` that contains escape sequences for different console colors.

- `colored-console`: Contains a custom logger `customLogger` that logs messages in different colors based on the log level.

Example usage:
```typescript
import { customLogger } from 'common-node-utils/colored-console'

customLogger.error('This is an error message')
```
