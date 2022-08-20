/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [`dist/modules/**/*.entity.{js,ts}`],
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'TypeormMigrations',
  migrationsRun: true,
  cli: {
    entitiesDir: 'src/modules',
    migrationsDir: 'src/database/migrations',
  },
  ...(process.env.NODE_ENV === 'production'
    ? {
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }
    : {}),
};
