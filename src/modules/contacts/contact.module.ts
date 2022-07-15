import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { ContactService } from './contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactRepository])],
  providers: [ContactService],
  controllers: [ContactController],
  exports: [TypeOrmModule, ContactService],
})
export class ContactModule {}
