/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CallEntity } from './call.entity';
import { ContactEntity } from './contact.entity';
import { MessageEnity } from './message.entity';
import { StoryEntity } from './story.entity';

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column({ nullable: true, default: '' })
  userToken?: string;

  @Column({ nullable: true, default: '' })
  userProfileUrl?: string;

  @Column({ nullable: true, default: '' })
  userCoverUrl: string;

  @OneToMany(() => ContactEntity, (contact: ContactEntity) => contact.username)
  contacts: ContactEntity[];

  @OneToMany(() => ContactEntity, (contact: ContactEntity) => contact.username)
  blockedContacts: ContactEntity[];

  @OneToMany(
    () => MessageEnity,
    (message: MessageEnity) => message.senderUsername,
  )
  messages: MessageEnity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.storyOwner)
  stories: StoryEntity[];

  @OneToMany(() => CallEntity, (call: CallEntity) => call.username)
  calls: CallEntity[];
}

export default UserEntity;
