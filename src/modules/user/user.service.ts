import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './createUser.dto';
import UserEntity from '../entities/user.entity';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: CreateUserDto): Promise<any> {
    return this.userRepository.save(user);
  }

  findById(id: number): Promise<UserEntity[]> {
    return this.userRepository.find({ where: { id: id } });
  }

  fintByUsername(username: string): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: { userName: username.toLowerCase() },
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
      .where('id = :id', { id: id })
      .execute();
  }
}

export default UserService;
