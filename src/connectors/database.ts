import { DataSource, DataSourceOptions, EntityTarget, ObjectLiteral, Repository } from 'typeorm';

import { Example } from 'src/data_model/entities/example';

export const getOrmConfig = () => {
  const settings: DataSourceOptions = {
    type: process.env.DB_CONNECTION as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Example],
    subscribers: [],
    logging: process.env.TYPEORM_LOGGING === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  };

  if (process.env.NODE_ENV === 'test') {
    return {
      ...settings,
      synchronize: true,
      dropSchema: true,
    };
  }

  return settings;
};

export class Connection {
  private connection: DataSource;

  constructor(options: DataSourceOptions = getOrmConfig()) {
    this.connection = new DataSource(options);
    this.connection.initialize();
  }

  getRepository<Entity extends ObjectLiteral>(entity: EntityTarget<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity);
  }
}

export const DBConnection = new Connection();
