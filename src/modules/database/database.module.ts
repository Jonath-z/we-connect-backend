import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { CallEntity } from '../calls/call.entity';
import { MessageEnity } from '../Message/message.entity';
import { StoryEntity } from '../story/story.entity';

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
        entities: [UserEntity, CallEntity, MessageEnity, StoryEntity],
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
