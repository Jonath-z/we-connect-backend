import { Injectable } from '@nestjs/common';
import { StoryRepository } from './story.repository';

@Injectable()
export class StorySevice {
  constructor(public readonly storyRepository: StoryRepository) {}
}
