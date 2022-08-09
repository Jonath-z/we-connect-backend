import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';
import { MessageDto } from 'src/modules/message/message.dto';
// import { MessageEntity } from 'src/modules/message/message.entity';
import { MessageService } from 'src/modules/message/message.service';
import UserService from 'src/modules/user/user.service';
// import { MessageInterface } from 'src/types';

interface WriteMessageSignalDto {
  from: string;
  to: string;
  isTyping: boolean;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageGateway {
  constructor(
    private readonly messageServices: MessageService,
    private readonly userServices: UserService,
  ) {}

  @SubscribeMessage('typingMessageSignal')
  async handleTypeMessage(
    @MessageBody() signal: WriteMessageSignalDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, isTyping } = signal;

    const foundUser = await this.userServices.findByUsername(
      to.toLocaleLowerCase().trim(),
    );

    if (foundUser) {
      socket
        .to(foundUser.userSocketId)
        .emit('getTypingMessageSignal', { from, to, isTyping });
    } else {
      console.log('user not found');
    }
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody() message: MessageDto,
    @ConnectedSocket() socket: Socket,
  ) {
    this.messageServices.createMessage(message);

    const foundUser = await this.userServices.findByUsername(
      message.receiver.toLocaleLowerCase().trim(),
    );

    if (foundUser) {
      socket.to(foundUser.userSocketId).emit('newMessage', message);
    } else {
      console.log('user not found');
    }
  }
}
