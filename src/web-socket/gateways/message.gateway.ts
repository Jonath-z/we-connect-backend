import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';
import { MessageEntity } from 'src/modules/message/message.entity';
import { MessageService } from 'src/modules/message/message.service';

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
  constructor(private readonly messageServices: MessageService) {}

  @SubscribeMessage('typingMessageSignal')
  handleTypeMessage(
    @MessageBody() signal: WriteMessageSignalDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, isTyping } = signal;

    socket.broadcast.emit('getTypingMessageSignal', { from, to, isTyping });
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(
    @MessageBody() message: MessageEntity,
    @ConnectedSocket() socket: Socket,
  ) {
    this.messageServices.createMessage(message);

    socket.broadcast.emit('newMessage', message);
  }
}
