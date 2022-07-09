import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from './modules/web-socket/chat.gateway';
import { UserEntity } from './modules/user/user.entity';
import { CallEntity } from './modules/calls/call.entity';
import { MessageEnity } from './modules/Message/message.entity';
import { StoryEntity } from './modules/story/story.entity';
// import typeormConfig from '../config/ormconfig';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '/.env' }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [Gateway],
})
export class AppModule {}
