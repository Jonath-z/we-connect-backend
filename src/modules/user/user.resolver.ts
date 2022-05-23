import { Inject } from '@nestjs/common';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateUserDto } from './dto';
import { UserModel } from './model';
import UserService from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query(() => [UserModel], { name: 'findUserById' })
  async user(@Args('id') id: number): Promise<UserModel[]> {
    return await this.userService.findById(id);
  }

  @Query(() => [UserModel], { name: 'findAllUsers' })
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  async createUser(@Args('userData') userData: CreateUserDto) {
    return await this.userService.createUser(userData);
  }
}
