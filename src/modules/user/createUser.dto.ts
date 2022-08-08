import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  userPassword?: string;

  @IsString()
  userToken: string;

  @IsString()
  @IsOptional()
  userProfileUrl?: string;

  @IsString()
  @IsOptional()
  usernameLowerCase?: string;

  @IsString()
  @IsOptional()
  userSocketId?: string;

  @IsString()
  @IsOptional()
  userCoverUrl?: string;
}
