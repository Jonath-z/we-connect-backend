import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { StorySevice } from 'src/modules/story/story.service';

@Injectable()
export class TasksService {
  constructor(private readonly storyServices: StorySevice) {}
  private readonly logger = new Logger(TasksService.name);

  @Cron('0 59 23 * * *')
  async handleCron() {
    this.logger.debug('Called after 1day');
    await this.storyServices.deleteExpiredStories();
  }
}
