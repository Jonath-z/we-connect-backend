import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ContactDto } from './contact.dto';
import { ContactEntity } from './contact.entity';
import { ContactRepository } from './contact.repository';

@Injectable()
export class ContactService {
  constructor(public readonly contactRepository: ContactRepository) {}

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
