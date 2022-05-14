import { Body, Controller, Post } from '@nestjs/common';
import { UserInterface } from 'src/types';
import UserService from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: UserInterface): Promise<UserInterface> {
    return this.userService.createUser(user);
  }
}
