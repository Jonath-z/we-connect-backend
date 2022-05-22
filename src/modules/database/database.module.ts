import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(<string>configService.get('POSTGRES_PORT')),
        // username: configService.get('POSTGRES_USER') ,
        username: 'postgres',
        password: configService.get('POSTGRES_PASSWORD') || 'password',
        database: configService.get('POSTGRES_DATABASE'),
        entities: [`${__dirname}/../**/*.model.*`],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
