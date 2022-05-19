import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ContactInterface, MessageInterface } from 'src/types';

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

  @Field()
  @Column()
  userToken: string;

  @Field()
  @Column()
  userProfileUrl: string;

  @Field()
  @Column()
  userAvatarUrl: string;

  @Field()
  @Column('simple-array', { default: '' })
  contacts: ContactInterface[];

  @Field()
  @Column('simple-array', { default: '' })
  blockedContact: ContactInterface[];

  @Field()
  @Column('simple-array', { default: '' })
  messages: MessageInterface[];

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}
