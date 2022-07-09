// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    './src/modules/calls/call.entity.ts',
    './src/modules/contact/contact.entity.ts',
    './src/modules/Message/message.entity.ts',
    './src/modules/story/story.entity.ts',
    './src/modules/user/user.entity.ts',
  ],
  synchronize: false,
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'TypeormMigrations',
  migrationsRun: true,
};
