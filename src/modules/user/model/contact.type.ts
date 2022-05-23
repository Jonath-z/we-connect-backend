import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field()
  contactName: string;

  @Field()
  contactId: string;
}
