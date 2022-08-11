import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { CallDto } from 'src/modules/call/call.dto';
import { CallService } from 'src/modules/call/call.service';
import UserService from 'src/modules/user/user.service';

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
export class CallGateway {
  constructor(
    private readonly callServices: CallService,
    private readonly userServices: UserService,
  ) {}

  @SubscribeMessage('requestCall')
  async handleRequetedCall(
    @MessageBody() callRequest: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal, callType } = callRequest;

    const foundUser = await this.userServices.findByUsername(
      to.toLocaleLowerCase().trim(),
    );

    if (foundUser) {
      socket
        .to(foundUser.userSocketId)
        .emit('incomingCall', { from, to, signal, callType });
    }
  }

  @SubscribeMessage('cancelCall')
  async handleCancelCall(
    @MessageBody() cancelCall: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { to, from } = cancelCall;

    const foundUser = await this.userServices.findByUsername(
      to.toLocaleLowerCase().trim(),
    );

    if (foundUser) {
      socket.to(foundUser.userSocketId).emit('leaveCall', { to, from });
    }
  }

  @SubscribeMessage('answerCall')
  async handleAnswerCall(
    @MessageBody() accepteCallData: IRequestCallDto,
    @ConnectedSocket() socket: Socket,
  ) {
    const { from, to, signal, callType } = accepteCallData;

    const foundUser = await this.userServices.findByUsername(
      to.toLocaleLowerCase().trim(),
    );

    if (foundUser) {
      socket
        .to(foundUser.userSocketId)
        .emit('callAccepted', { from, to, signal, callType });
    }
  }
}
