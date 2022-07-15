import { Controller } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('call')
export class ContactController {
  constructor(public readonly contactServices: ContactService) {}
}
