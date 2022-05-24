/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputType, Field } from '@nestjs/graphql';
import { ContactInterface, MessageInterface } from 'src/types';

@InputType()
export class MessageDto {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field()
  message: string;

  @Field()
  messageId: string;
}

@InputType()
export class ContactDto {
  @Field()
  contactName: string;

  @Field()
  contactId: string;
}

@InputType()
export class UserUpdateProfileDto {
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

  @Field((type) => [ContactDto], { nullable: true })
  contacts?: ContactInterface[];

  @Field((type) => [ContactDto], { nullable: true })
  blockedContact?: ContactInterface[];

  @Field((type) => [MessageDto], { nullable: true })
  messages?: MessageInterface[];
}
