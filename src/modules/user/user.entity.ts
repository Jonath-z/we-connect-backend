/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CallEntity } from '../calls/call.entity';
import { ContactEntity } from '../contact/contact.entity';
import { MessageEnity } from '../Message/message.entity';
import { StoryEntity } from '../story/story.entity';

@Entity('users')
export class UserEntity {
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
  public contacts: ContactEntity[];

  @OneToMany(() => ContactEntity, (contact: ContactEntity) => contact.username)
  public blockedContacts: ContactEntity[];

  @OneToMany(
    () => MessageEnity,
    (message: MessageEnity) => message.senderUsername,
  )
  public messages: MessageEnity[];

  @OneToMany(() => StoryEntity, (story: StoryEntity) => story.storyOwner)
  public stories: StoryEntity[];

  @OneToMany(() => CallEntity, (call: CallEntity) => call.username)
  public calls: CallEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}