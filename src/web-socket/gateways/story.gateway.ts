import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { StoryDto } from 'src/modules/story/story.dto';
import { StoryEntity } from 'src/modules/story/story.entity';
import { StorySevice } from 'src/modules/story/story.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class StoryGateway {
  constructor(private readonly storyServices: StorySevice) {}

  @SubscribeMessage('addStory')
  async handleAddStory(
    @MessageBody() story: StoryDto,
    @ConnectedSocket() socket: Socket,
  ) {
    this.storyServices.saveStory(story);

    socket.broadcast.emit('newStoryAdded', story);
  }

  @SubscribeMessage('deleteStory')
  async handleDeleteStory(
    @MessageBody() story: StoryEntity,
    @ConnectedSocket() socket: Socket,
  ) {
    this.storyServices.deleteStory(story.id);

    socket.broadcast.emit('deletedStory', story);
  }
}
