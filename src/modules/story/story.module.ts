import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryController } from './story.controller';
import { StoryRepository } from './story.repository';
import { StorySevice } from './story.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoryRepository])],
  providers: [StorySevice],
  controllers: [StoryController],
  exports: [TypeOrmModule, StorySevice],
})
export class StoryModule {}
