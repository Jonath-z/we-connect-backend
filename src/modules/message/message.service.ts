import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { MessageDto } from './message.dto';
import { MessageEntity } from './message.entity';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(public readonly messageRepository: MessageRepository) {}

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
