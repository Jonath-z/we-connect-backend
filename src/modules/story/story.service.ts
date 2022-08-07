import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { StoryDto } from './story.dto';
import { StoryEntity } from './story.entity';
import { StoryRepository } from './story.repository';

@Injectable()
export class StorySevice {
  constructor(public readonly storyRepository: StoryRepository) {}

  saveStory(story: StoryDto) {
    this.storyRepository.save(story);
  }

  deleteStory(id: number): Promise<DeleteResult> {
    return this.storyRepository
      .createQueryBuilder()
      .delete()
      .from(StoryEntity)
      .where('id = :id', { id })
      .execute();
  }
}
