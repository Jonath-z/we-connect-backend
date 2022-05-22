import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserModel } from './user.model';
import { CreateUserDto, UserUpdateProfileDto } from './user.dto';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  createUser(user: CreateUserDto): Promise<CreateUserDto> {
    return this.userRepository.save(user);
  }

  findById(id: number): Promise<UserModel[]> {
    return this.userRepository.find({ where: { id: id } });
  }

  findAll(): Promise<CreateUserDto[]> {
    return this.userRepository.find();
  }

  updateUserById(
    id: number,
    data: UserUpdateProfileDto,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, data);
  }

  deleteAccount(id: number): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserModel)
      .where('id = :id', { id: id })
      .execute();
  }
}

export default UserService;
