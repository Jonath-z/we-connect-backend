import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
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

  @Put('/create')
  async createUser(@Body() newUser: CreateUserDto) {
    const foundUser = await this.userServices.findByUsername(
      newUser.username.toLocaleLowerCase(),
    );

    if (!foundUser) {
      await this.userServices.createUser({
        ...newUser,
        usernameLowerCase: newUser.username.toLocaleLowerCase(),
      });
      return {
        message: 'user created successfully',
        user: newUser,
      };
    } else {
      return {
        message: 'user exists',
        user: foundUser,
      };
    }
  }

  @Post('/update')
  async updateUserProfile(@Body() user: CreateUserDto) {
    const foundUser = await this.userServices.findByTokenId(user.userToken);

    if (foundUser) {
      await this.userServices.updateById(foundUser.id, {
        username: user.username || foundUser.username,
        userToken: user.userToken || foundUser.userToken,
        userCoverUrl: user.userCoverUrl || foundUser.userCoverUrl || '',
        userProfileUrl: user.userProfileUrl || foundUser.userProfileUrl || '',
        usernameLowerCase: (
          user.username || foundUser.username
        ).toLocaleLowerCase(),
        userSocketId: user.userSocketId || foundUser.userSocketId,
        userPassword: user.userPassword || foundUser.userPassword,
      });

      return {
        message: 'user updated successfully',
        user,
      };
    } else {
      throw new BadRequestException('user not found');
    }
  }

  @Get('/:userToken')
  async findUser(@Param('userToken') userToken: string) {
    try {
      const user = await this.userServices.findByTokenId(userToken);

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
    } catch (err) {
      console.log('error when truing to fetch the user', err);
    }
  }
}
