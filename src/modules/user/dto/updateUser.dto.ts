import { InputType, Field } from '@nestjs/graphql';
import { ContactInterface, MessageInterface } from 'src/types';
import { Contact, Message } from '../model';

@InputType()
export class UserUpdateProfileDto {
  @Field()
  id: number;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  userPassword?: string;

  @Field({ nullable: true })
  userToken?: string;

  @Field({ nullable: true })
  userProfileUrl?: string;

  @Field({ nullable: true })
  userAvatarUrl?: string;
  @Field((type) => [Contact], { nullable: true })
  contacts?: ContactInterface[];

  @Field((type) => [Contact], { nullable: true })
  blockedContact?: ContactInterface[];

  @Field((type) => [Message], { nullable: true })
  messages?: MessageInterface[];
}
