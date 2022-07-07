// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['src/**/*.entity{ .ts,.js}'],
  synchronize: false,
  migrations: ['src/modules/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'TypeormMigrations',
  migrationsRun: true,
};
