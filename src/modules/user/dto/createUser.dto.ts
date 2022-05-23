import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  userName: string;

  @Field()
  userPassword: string;
}
