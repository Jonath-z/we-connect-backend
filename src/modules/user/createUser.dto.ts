import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsString()
  @IsOptional()
  userPassword?: string;

  @IsString()
  userToken: string;

  @IsString()
  @IsOptional()
  userProfileUrl?: string;
}
