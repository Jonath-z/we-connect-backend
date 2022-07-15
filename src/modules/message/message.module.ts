import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { MessageService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository])],
  providers: [MessageService],
  controllers: [MessageController],
  exports: [TypeOrmModule, MessageService],
})
export class MessageModule {}
