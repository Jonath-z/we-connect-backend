import { IsBoolean, IsString } from 'class-validator';
import { DeepPartial } from 'typeorm';
import UserEntity from '../user/user.entity';

export class CallDto {
  @IsString()
  username: DeepPartial<UserEntity>;

  @IsString()
  userAvatarUrl: string;

  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsBoolean()
  missed: boolean;

  @IsBoolean()
  isIncoming: boolean;

  @IsBoolean()
  isVideo: boolean;
}
