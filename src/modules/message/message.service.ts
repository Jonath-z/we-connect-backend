import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { MessageDto } from './message.dto';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  createMessage(message: MessageDto): Promise<any> {
    return this.messageRepository.save(message);
  }

  findById(id: string): Promise<MessageEntity> {
    return this.messageRepository.findOne({
      where: { id },
    });
  }

  findBySenderUsername(senderUsername): Promise<MessageEntity[]> {
    return this.messageRepository.find({
      where: { senderUsername },
    });
  }

  findAll(): Promise<MessageEntity[]> {
    return this.messageRepository.find();
  }

  deleteMessage(id: number): Promise<DeleteResult> {
    return this.messageRepository
      .createQueryBuilder()
      .delete()
      .from(MessageEntity)
      .where('id = :id', { id })
      .execute();
  }
}
