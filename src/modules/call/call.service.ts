import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CallDto } from './call.dto';
import { CallEntity } from './call.entity';

@Injectable()
export class CallService {
  constructor(
    @InjectRepository(CallEntity)
    private callRepository: Repository<CallEntity>,
  ) {}

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
