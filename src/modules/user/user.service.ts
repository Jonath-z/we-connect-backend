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

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['contacts', 'calls', 'stories'],
      where: { id },
    });
  }

  findUserContactsById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['contacts'],
      where: { id },
    });
  }

  findUserStoriesById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['stories'],
      where: { id },
    });
  }

  findUserMessagesById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      relations: ['messages'],
      where: { id },
    });
  }

  findByUsername(userNameLowerCase: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { userNameLowerCase },
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  updateUserById(id: number, data: any): Promise<UpdateResult> {
    return this.userRepository.update(id, { ...data });
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('id = :id', { id })
      .execute();
  }
}

export default UserService;
