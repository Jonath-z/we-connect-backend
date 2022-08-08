import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';
import { MessageDto } from 'src/modules/message/message.dto';
import { MessageEntity } from 'src/modules/message/message.entity';
import { MessageService } from 'src/modules/message/message.service';
import { MessageInterface } from 'src/types';

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
    @MessageBody() message: MessageDto,
    @ConnectedSocket() socket: Socket,
  ) {
    this.messageServices.createMessage(message);

    socket.broadcast.emit('newMessage', message);
  }
}
