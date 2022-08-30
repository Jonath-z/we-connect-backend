import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryController } from './story.controller';
import { StoryEntity } from './story.entity';
import { StorySevice } from './story.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoryEntity])],
  providers: [StorySevice],
  controllers: [StoryController],
  exports: [TypeOrmModule, StorySevice],
})
export class StoryModule {}
