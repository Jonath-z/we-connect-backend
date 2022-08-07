import { IsOptional, IsString } from 'class-validator';
import { DeepPartial } from 'typeorm';
import UserEntity from '../user/user.entity';

export class ContactDto {
  @IsString()
  username: DeepPartial<UserEntity>;

  @IsString()
  userAvatartUrl: string;

  @IsString()
  @IsOptional()
  userCoverUrl?: string;
}
