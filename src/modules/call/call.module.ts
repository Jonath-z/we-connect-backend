import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallController } from './call.controller';
import { CallEntity } from './call.entity';
import { CallService } from './call.service';

@Module({
  imports: [TypeOrmModule.forFeature([CallEntity])],
  providers: [CallService],
  controllers: [CallController],
  exports: [TypeOrmModule, CallService],
})
export class CallModule {}
