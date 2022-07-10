import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallEntity } from '../entities/call.entity';
import { ContactEntity } from '../entities/contact.entity';
import { MessageEnity } from '../entities/message.entity';
import { StoryEntity } from '../entities/story.entity';
import { UserController } from './user.controller';
import UserEntity from '../entities/user.entity';
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
