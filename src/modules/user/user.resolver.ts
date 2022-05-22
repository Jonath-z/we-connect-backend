import { Inject } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { UserModel } from './user.model';
import UserService from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => UserModel)
  async user(@Args('id') id: number): Promise<UserModel[]> {
    return await this.userService.findById(id);
  }
}
