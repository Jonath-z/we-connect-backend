/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['/src/modules/**/*.entity.ts'],
  synchronize: true,
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'TypeormMigrations',
  migrationsRun: true,
  autoLoadEntities: true,
};
