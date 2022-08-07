import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CallModule } from './modules/call/call.module';
import { ContactModule } from './modules/contacts/contact.module';
import { MessageModule } from './modules/message/message.module';
import { StoryModule } from './modules/story/story.module';
import { UserModule } from './modules/user/user.module';
import { CallGateWay } from './web-socket/gateways/call.gateway';
import { MessageGateWay } from './web-socket/gateways/message.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '/.env' }),
    DatabaseModule,
    CallModule,
    UserModule,
    ContactModule,
    MessageModule,
    StoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, CallGateWay, MessageGateWay],
})
export class AppModule {}
