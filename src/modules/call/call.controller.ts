import { Controller } from '@nestjs/common';
import { CallService } from './call.service';

@Controller('calls')
export class CallController {
  constructor(public readonly callServices: CallService) {}
}
