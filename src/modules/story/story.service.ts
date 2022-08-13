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

  async deleteExpiredStories() {
    const stories = await this.storyRepository.find();

    const now_timestamp = new Date();

    for (let i = 0; i < stories.length; i++) {
      const expiration_timestamp = new Date(stories[i].expirationDate);

      const milisecondBetween = Math.abs(
        expiration_timestamp.getTime() - now_timestamp.getTime(),
      );

      const hoursBetween = milisecondBetween / (60 * 60 * 1000);

      console.log('hours between', hoursBetween);

      if (hoursBetween <= 24) {
        return this.deleteStory(stories[i].id);
      }
    }
  }
}
