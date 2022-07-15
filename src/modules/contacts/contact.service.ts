import { Injectable } from '@nestjs/common';
import { ContactRepository } from './contact.repository';

@Injectable()
export class ContactService {
  constructor(public readonly contactRepository: ContactRepository) {}
}
