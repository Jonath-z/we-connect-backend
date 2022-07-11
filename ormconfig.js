/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['/src/modules/entities/*.entity.ts'],
  synchronize: false,
  migrations: ['/src/database/migrations/*.ts'],
  migrationsTableName: 'TypeormMigrations',
  migrationsRun: true,
  cli: {
    migrationsDir: '/src/database/migrations',
  },
};

// "migrate:generate": "ts-node ./node_modules/typeorm/cli.js migration:generate -d src/database/migrations -n"
