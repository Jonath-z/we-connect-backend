import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from './modules/web-socket/chat.gateway';
import { UserEntity } from './modules/user/user.entity';
import { CallEntity } from './modules/calls/call.entity';
import { MessageEnity } from './modules/Message/message.entity';
import { StoryEntity } from './modules/story/story.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [UserEntity, CallEntity, MessageEnity, StoryEntity],
      synchronize: false,
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '/.env' }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [Gateway],
})
export class AppModule {}
