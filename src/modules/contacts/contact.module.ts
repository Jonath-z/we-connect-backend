import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactEntity } from './contact.entity';
import { ContactService } from './contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [ContactService],
  controllers: [ContactController],
  exports: [TypeOrmModule, ContactService],
})
export class ContactModule {}
