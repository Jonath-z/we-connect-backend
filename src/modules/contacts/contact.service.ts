import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ContactDto } from './contact.dto';
import { ContactEntity } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {}

  createContact(contact: ContactDto): Promise<any> {
    return this.contactRepository.save(contact);
  }

  findById(id: number): Promise<ContactEntity> {
    return this.contactRepository.findOne({ where: { id } });
  }

  deleteContact(id: number): Promise<DeleteResult> {
    return this.contactRepository
      .createQueryBuilder()
      .delete()
      .from(ContactEntity)
      .where('id = :id', { id })
      .execute();
  }
}
