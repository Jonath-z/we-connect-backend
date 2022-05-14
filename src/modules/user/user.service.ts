import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterface } from 'src/types';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: UserInterface): Promise<UserInterface> {
    return this.userRepository.save(user);
  }

  addNewContact(
    id: number,
    contact: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        contacts: () => `array_append(${contact}, 1)`,
      })
      .where('id = :id', { id: id })
      .execute();
  }

  addNewMessage(
    id: number,
    message: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        messages: () => `array_append(${message}, 1)`,
      })
      .where('id = :id', { id: id })
      .execute();
  }

  updateUserName(
    id: number,
    userName: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, { userName: `${userName}` });
  }

  updatePassword(
    id: number,
    password: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, password);
  }

  updateProfileImage(
    id: number,
    userProfileUrl: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, {
      userProfileUrl: `${userProfileUrl}`,
    });
  }

  updateAvatarImage(
    id: number,
    userAvatarUrl: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, {
      userAvatarUrl: `${userAvatarUrl}`,
    });
  }
  updateUserToken(
    id: number,
    userToken: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(id, userToken);
  }

  deleteContact(id: number, contactId: number): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('question_id IN (:...id)', { contactId: contactId })
      .execute();
  }

  deleteMessage(id: number, messageId: string): Promise<DeleteResult> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('question_id IN (:...id)', { messageId: messageId })
      .execute();
  }
}

export default UserService;
