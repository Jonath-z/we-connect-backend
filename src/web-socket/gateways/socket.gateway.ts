import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { CreateUserDto } from 'src/modules/user/createUser.dto';
import UserService from 'src/modules/user/user.service';

@WebSocketGateway({
  cors: {
    orgin: '*',
  },
})
export class SocketGateway {
  constructor(private readonly userServices: UserService) {}

  @SubscribeMessage('newConnection')
  async handleNewSocketConnection(@MessageBody() user: CreateUserDto) {
    const { userToken } = user;

    const foundUser = await this.userServices.findByTokenId(userToken);

    if (foundUser) {
      await this.userServices.updateById(foundUser.id, {
        username: user.username || foundUser.username,
        userToken: user.userToken || foundUser.userToken,
        userSocketId: user.userSocketId || foundUser.userSocketId,
      });
    }
  }
}
