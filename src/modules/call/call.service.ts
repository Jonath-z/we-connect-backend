import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CallDto } from './call.dto';
import { CallEntity } from './call.entity';
import { CallReposotory } from './call.repository';

@Injectable()
export class CallService {
  constructor(public readonly callRepository: CallReposotory) {}

  saveCall(call: CallDto): Promise<any> {
    return this.callRepository.save(call);
  }

  findById(id: number): Promise<CallDto> {
    return this.callRepository.findOne({
      relations: ['username'],
      where: { id },
    });
  }

  deleteCall(id: number): Promise<DeleteResult> {
    return this.callRepository
      .createQueryBuilder()
      .delete()
      .from(CallEntity)
      .where('id = :id', { id })
      .execute();
  }
}
