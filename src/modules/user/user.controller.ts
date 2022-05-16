import {
  Body,
  Controller,
  Post,
  Param,
  Patch,
  Delete,
  Get,
  ParseIntPipe,
} from '@nestjs/common';
import { UserInterface, ContactInterface, MessageInterface } from 'src/types';
import UserService from './user.service';

// testing endpoint on process

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('newUser')
  async create(@Body() user: UserInterface): Promise<UserInterface> {
    console.log('new user ', user);
    return await this.userService.createUser(user);
  }

  @Post('newContact/:id')
  async addNewContact(
    @Body() newContact: ContactInterface,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.addNewContact(id, newContact);
  }

  @Post('/newMessage/:id')
  async addNewMessage(
    @Body() newMessage: MessageInterface,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.addNewMessage(id, newMessage);
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findById(id);
  }

  @Get('all')
  async findAllUsers() {
    return await this.userService.findAll();
  }

  @Patch('newUserName/:id')
  async updateUserName(
    @Body() data: { newUserName: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.updateUserName(id, data.newUserName);
  }

  @Patch('newUserPassword/:id')
  async updateUserPassword(
    @Body() data: { newUserPassword: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.updatePassword(id, data.newUserPassword);
  }

  @Patch('newUserProfile/:id')
  async updateUserProfile(
    @Body() data: { newUserProfile: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.updatePassword(id, data.newUserProfile);
  }

  @Patch('newUserAvatar/:id')
  async updateUserAvatar(
    @Body() data: { newUserAvatar: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.updatePassword(id, data.newUserAvatar);
  }

  @Patch('newUserToken/:id')
  async updateUserToken(
    @Body() data: { newUserToken: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.userService.updatePassword(id, data.newUserToken);
  }

  @Delete('deleteContact/:id')
  async deleteUserContact(
    @Body() data: { contactId: number },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.deleteContact(id, data.contactId);
  }

  @Delete('deleteMessage/:id')
  async deleteUserMessage(
    @Body() data: { messageId: string },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.deleteMessage(id, data.messageId);
  }

  @Delete('deleteAccount/:id')
  async deleteAccount(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteAccount(id);
  }
}
