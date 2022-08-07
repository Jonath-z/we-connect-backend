import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
// import UserEntity from '../modules/user/user.entity';
// import { CallEntity } from '../modules/entities/call.entity';
// import { MessageEnity } from '../modules/entities/message.entity';
// import { StoryEntity } from '../modules/story/story.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(<string>configService.get('POSTGRES_PORT')),
        username: 'postgres',
        password: configService.get('POSTGRES_PASSWORD') || 'password',
        database: configService.get('POSTGRES_DATABASE'),
        entities: [`dist/modules/**/*.entity.{js,ts}`],
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
