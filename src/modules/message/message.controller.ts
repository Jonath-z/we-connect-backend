import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(public readonly messageService: MessageService) {}
}
