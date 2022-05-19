import { Module } from '@nestjs/common';
import { UserResolver } from './resolver/user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserController } from './user.controller';
// import { UserEntity } from './user.entity';
import UserService from './user.service';
import { UserModel } from './model/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService, UserResolver],
  exports: [UserService],
  // controllers: [UserResolver],
})
export class UserModule {}
