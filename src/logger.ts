import Pino from 'pino';

const logger = Pino({
  safe: true,
  name: 'logger',
  level: 'trace',
  timestamp: true,
});

export default logger;
