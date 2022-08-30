import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CallModule } from './modules/call/call.module';
import { ContactModule } from './modules/contacts/contact.module';
import { MessageModule } from './modules/message/message.module';
import { StoryModule } from './modules/story/story.module';
import { UserModule } from './modules/user/user.module';
import { TasksService } from './TasksServices/task.service';
import { CallGateway } from './web-socket/gateways/call.gateway';
import { MessageGateway } from './web-socket/gateways/message.gateway';
import { SocketGateway } from './web-socket/gateways/socket.gateway';
import { StoryGateway } from './web-socket/gateways/story.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '/.env' }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    UserModule,
    CallModule,
    ContactModule,
    MessageModule,
    StoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CallGateway,
    MessageGateway,
    SocketGateway,
    TasksService,
    StoryGateway,
  ],
})
export class AppModule {}
