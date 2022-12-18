import Pino from 'pino';

const log = Pino({
  safe: true,
  name: 'logger',
  level: 'trace',
  timestamp: true,
});

log.info('It works...');
