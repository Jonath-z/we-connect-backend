import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field()
  message: string;

  @Field()
  messageId: string;
}
