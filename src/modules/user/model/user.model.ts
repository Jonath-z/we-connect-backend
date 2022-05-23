import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { MessageInterface, ContactInterface } from 'src/types';
import { Contact, Message } from './index';

@ObjectType()
@Entity('users')
export class UserModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  userName: string;

  @Field()
  @Column()
  userPassword: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  userToken?: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  userProfileUrl?: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  userAvatarUrl: string;

  @Field((type) => [Contact], { nullable: true })
  @Column('simple-array', { default: '' })
  contacts?: ContactInterface[];

  @Field((type) => [Contact], { nullable: true })
  @Column('simple-array', { default: '' })
  blockedContact?: ContactInterface[];

  @Field((type) => [Message], { nullable: true })
  @Column('simple-array', { default: '' })
  messages?: MessageInterface[];

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}
