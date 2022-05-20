import { InputType, Field } from '@nestjs/graphql';
import { ContactInterface, MessageInterface } from 'src/types';

@InputType()
export class UserUpdateProfileDto {
  @Field()
  id: number;

  @Field()
  userName?: string;

  @Field()
  userPassword?: string;

  @Field()
  userToken?: string;

  @Field()
  userProfileUrl?: string;

  @Field()
  userAvatarUrl?: string;

  @Field()
  contacts?: ContactInterface[];

  @Field()
  blockedContact?: ContactInterface[];

  @Field()
  messages?: MessageInterface[];
}

export class CreateUserDto {
  @Field()
  userName: string;

  @Field()
  userPassword: string;
}
