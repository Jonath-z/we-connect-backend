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

  @Post('/')
  async createUser(@Body() newUser: CreateUserDto) {
    const user = await this.userServices.fintByUsername(newUser.userName);

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

  @Get('/')
  async findUser(@Param() userId: number) {
    const foundUser = await this.userServices.findById(userId);

    if (foundUser) {
      return {
        message: 'user found',
        user: foundUser,
      };
    } else {
      return {
        message: 'user not found',
        user: null,
      };
    }
  }
}
