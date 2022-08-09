import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(public readonly messageService: MessageService) {}

  @Get('/messages')
  async findAllMessage() {
    return await this.messageService.findAll();
  }
}
