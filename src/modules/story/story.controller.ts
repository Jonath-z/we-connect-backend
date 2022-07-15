import { Controller } from '@nestjs/common';
import { StorySevice } from './story.service';

@Controller()
export class StoryController {
  constructor(public readonly storyServices: StorySevice) {}
}
