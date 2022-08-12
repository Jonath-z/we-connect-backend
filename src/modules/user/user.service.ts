import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './createUser.dto';
import UserEntity from './user.entity';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: CreateUserDto): Promise<any> {
    return this.userRepository.save(user);
  }

  findByTokenIdOrUsername(userTokenOrUsername: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['contacts', 'calls', 'stories'],
      where: [
        { userToken: userTokenOrUsername },
        { usernameLowerCase: userTokenOrUsername.toLocaleLowerCase() },
      ],
    });
  }

  findUserContactsByTokenId(userToken: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['contacts'],
      where: { userToken },
    });
  }

  findUserStoriesByTokenId(userToken: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['stories'],
      where: { userToken },
    });
  }

  findUserMessagesByTokenId(userToken: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['messages'],
      where: { userToken },
    });
  }

  findByUsername(usernameLowerCase: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { usernameLowerCase },
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  updateById(id: number, data: CreateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, { ...data });
  }

  deleteUser(userToken: string): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('userToken = :userToken', { userToken })
      .execute();
  }
}

export default UserService;
