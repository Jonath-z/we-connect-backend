import { Body, Controller, Delete, Param, Put } from '@nestjs/common';
import { CallDto } from './call.dto';
import { CallService } from './call.service';

@Controller('calls')
export class CallController {
  constructor(public readonly callServices: CallService) {}

  @Put('/save')
  async saveCall(@Body() call: CallDto) {
    return await this.callServices.saveCall(call);
  }

  @Delete('/delete/:id')
  async deleteClass(@Param() id: number) {
    return await this.callServices.deleteCall(id);
  }
}
