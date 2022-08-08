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
    console.log('new user connection', user);

    const foundUser = await this.userServices.findByTokenId(
      user.userToken.toString(),
    );

    if (foundUser) {
      await this.userServices.updateUserByToken(user.userToken, {
        username: user.username || foundUser.username,
        userToken: user.userToken || foundUser.userToken,
        userSocketId: user.userSocketId || foundUser.userSocketId,
      });
    }
  }
}
