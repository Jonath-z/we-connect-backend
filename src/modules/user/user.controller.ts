import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import UserService from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Get('/')
  async getAllUsers() {
    const users = await this.userServices.findAll();

    return users;
  }

  @Post('/create')
  async createUser(@Body() newUser: CreateUserDto) {
    const user = await this.userServices.findByUsername(
      newUser.userName.toLocaleLowerCase(),
    );

    if (!user) {
      await this.userServices.createUser(newUser);
      return {
        message: 'user created successfully',
        user: newUser,
      };
    } else {
      throw new BadRequestException('username already exists');
    }
  }

  @Get('/:userIdOrUserToken')
  async findUser(@Param() userIdOrUserToken: number) {
    const user = await this.userServices.findById(userIdOrUserToken);

    if (user) {
      return {
        message: 'user found',
        user,
      };
    } else {
      return {
        message: 'user not found',
        user: null,
      };
    }
  }
}
