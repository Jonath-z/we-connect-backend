/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CallEntity } from '../call/call.entity';
import { ContactEntity } from '../contacts/contact.entity';
import { MessageEntity } from '../message/message.entity';
import { StoryEntity } from '../story/story.entity';

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: '' })
  username: string;

  @Column({ nullable: true, default: '' })
  usernameLowerCase: string;

  @Column({ nullable: true, default: '' })
  userPassword: string;

  @Column({ nullable: true, default: '' })
  userToken?: string;

  @Column({ nullable: true, default: '' })
  userSocketId?: string;

  @Column({ nullable: true, default: '' })
  userProfileUrl?: string;

  @Column({ nullable: true, default: '' })
  userCoverUrl: string;

  @OneToMany(() => ContactEntity, (contact: ContactEntity) => contact.username)
  contacts: ContactEntity[];

  @OneToMany(() => MessageEntity, (message: MessageEntity) => message.sender)
  messages: MessageEntity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.storyOwner)
  stories: StoryEntity[];

  @OneToMany(() => CallEntity, (call: CallEntity) => call.username)
  calls: CallEntity[];
}

export default UserEntity;
