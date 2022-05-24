import { Inject } from '@nestjs/common';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateUserDto, UserUpdateProfileDto } from './dto';
import { UserModel } from './model/types';
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

  @Mutation(() => UserModel, { name: 'updateUserById' })
  async updateUserById(
    @Args('data') data: UserUpdateProfileDto,
    @Args('id') id: number,
  ) {
    return await this.userService.updateUserById(id, data);
  }

  @Mutation(() => UserModel, { name: 'deleteUser' })
  async deleteUser(@Args('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
