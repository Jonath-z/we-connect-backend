import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallEntity } from '../calls/call.entity';
import { ContactEntity } from '../contact/contact.entity';
import { MessageEnity } from '../Message/message.entity';
import { StoryEntity } from '../story/story.entity';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import UserService from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ContactEntity,
      MessageEnity,
      CallEntity,
      StoryEntity,
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
