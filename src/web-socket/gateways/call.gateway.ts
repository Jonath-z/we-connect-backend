import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

interface IRequestCallDto {
  from: string;
  to: string;
  signal?: any;
  callType: string;
}

@WebSocketGateway({
  cors: {
    orgin: '*',
  },
})
export class CallGateWay {
  @SubscribeMessage('requestCall')
  handleRequetedCall(
    @MessageBody() callRequest: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal, callType } = callRequest;
    socket.broadcast.emit('incomingCall', { from, to, signal, callType });
  }

  @SubscribeMessage('cancelCall')
  handleCancelCall(
    @MessageBody() cancelCall: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to } = cancelCall;
    socket.broadcast.emit('leaveCall', { from, to });
  }

  @SubscribeMessage('answerCall')
  handleAnswerCall(
    @MessageBody() accepteCallData: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal, callType } = accepteCallData;
    console.log('answer call signal', signal);
    socket.broadcast.emit('callAccepted', { from, to, signal, callType });
  }
}
