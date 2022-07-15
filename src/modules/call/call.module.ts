import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallController } from './call.controller';
import { CallReposotory } from './call.repository';
import { CallService } from './call.service';

@Module({
  imports: [TypeOrmModule.forFeature([CallReposotory])],
  providers: [CallService],
  exports: [TypeOrmModule, CallService],
  controllers: [CallController],
})
export class CallModule {}
