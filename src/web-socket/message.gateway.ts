import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

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
export class MessageGateWay {
  @SubscribeMessage('typingMessageSignal')
  handleSendMessage(
    @MessageBody() signal: WriteMessageSignalDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, isTyping } = signal;

    console.log('write message signal', signal);

    socket.broadcast.emit('getTypingMessageSignal', { from, to, isTyping });
  }
}
