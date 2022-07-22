import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface IRequestCall {
  from: string;
  to: string;
  signal?: any;
}

@WebSocketGateway({
  cors: {
    orgin: '*',
  },
})
export class CallGateWay {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('requestCall')
  handleRequetedCall(
    @MessageBody() callRequest: IRequestCall,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal } = callRequest;
    socket.broadcast.emit('incomingCall', { from, to, signal });
  }

  @SubscribeMessage('cancelCall')
  handleCancelCall(
    @MessageBody() cancelCall: IRequestCall,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to } = cancelCall;
    socket.broadcast.emit('leaveCall', { from, to });
  }

  @SubscribeMessage('answerCall')
  handleAnswerCall(
    @MessageBody() answerCall: IRequestCall,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal } = answerCall;
    socket.broadcast.emit('callAccepted', { from, to, signal });
  }
}
